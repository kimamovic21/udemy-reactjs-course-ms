import React from 'react';
import { Link, redirect, useNavigate, useParams, useSubmit, useNavigation } from 'react-router-dom';
import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useQuery } from '@tanstack/react-query';
// import { useMutation } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

const EditEvent = () => {
    const navigate = useNavigate();
    const { state } = useNavigation();
    const submit = useSubmit();
    const params = useParams();

    const { data, isError, error } = useQuery({
        queryKey: ['events', params.id],           
        queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
        staleTime: 10000  // 10s
    });

    // const { mutate } = useMutation({
    //     mutationFn: updateEvent,
    //     onMutate: async (data) => {
    //         const newEvent = data.event;

    //         await queryClient.cancelQueries({ queryKey: ['events', params.id] });
    //         const previousEvent = queryClient.getQueryData(['events', params.id]);

    //         queryClient.setQueryData(['events', params.id], newEvent);

    //         return { previousEvent: previousEvent };
    //     },
    //     onError: (error, data, context) => {
    //         queryClient.setQueryData(['events', params.id], content.previousEvent);
    //     },
    //     onSettled: () => {
    //         queryClient.invalidateQueries(['events', params.id]);
    //     }
    // });

    const handleSubmit = (formData) => {
        // mutate({ id: params.id, event: formData });
        // navigate('../');
        submit(formData, { method: 'PUT' });
    };

    const handleClose = () => {
        navigate('../');
    };

    let content;

    if (isError) {
        content = (
            <>
                <ErrorBlock title='Failed to load event' message={error.info?.message || 'Failed to load event. Please check your inputs and try again later.'} />
                <div className="form-actions">
                    <Link to='../' className='button'>Okay</Link>
                </div>
            </>
        );
    };

    if (data) {
        content = (
            <EventForm inputData={data} onSubmit={handleSubmit}>
                {state === 'submitting' ? 
                    (<p>Sending data...</p>) : (
                    <>
                        <Link to="../" className="button-text">Cancel</Link>
                        <button type="submit" className="button">Update</button>
                    </>
                )}
            </EventForm>
        );
    };

    return (
        <Modal onClose={handleClose}>
            {content}
        </Modal>
    );
};

export default EditEvent;


export const loader = ({ params }) => {
    return queryClient.fetchQuery({
        queryKey: ['events', params.id],
        queryFn: ({ signal }) => fetchEvent({ signal, id: params.id})
    });
};


export const action = async ({ request, params }) => {
    const formData = await request.formData();
    const updatedEventData = Object.fromEntries(formData);
    await updateEvent({ id: params.id, event: updatedEventData });
    await queryClient.invalidateQueries(['events']);
    return redirect('../');
};