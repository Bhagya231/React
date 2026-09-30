import {
  useNavigate,
  Form,
  useNavigation,
} from 'react-router-dom';

import { useState } from 'react';

import classes from './EventForm.module.css';
import { validateEvent } from '../util/validation';

function EventForm({ method = 'POST', event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const [errors, setErrors] = useState({});

  const isSubmitting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate('..');
  }

  function submitHandler(event) {
    const form = event.currentTarget;

    const formData = new FormData(form);

    const eventData = {
      title: formData.get('title'),
      image: formData.get('image'),
      date: formData.get('date'),
      description: formData.get('description'),
    };

    const validationErrors = validateEvent(eventData);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      event.preventDefault();
    }
  }

  return (
    <Form
      method={method}
      className={classes.form}
      onSubmit={submitHandler}
    >
      <p>
        <label htmlFor="title">Title</label>

        <input
          id="title"
          type="text"
          name="title"
          defaultValue={event ? event.title : ''}
        />

        {errors.title && (
          <span className={classes.error}>
            {errors.title}
          </span>
        )}
      </p>

      <p>
        <label htmlFor="image">Image</label>

        <input
          id="image"
          type="url"
          name="image"
          defaultValue={event ? event.image : ''}
        />

        {errors.image && (
          <span className={classes.error}>
            {errors.image}
          </span>
        )}
      </p>

      <p>
        <label htmlFor="date">Date</label>

        <input
          id="date"
          type="date"
          name="date"
          defaultValue={event ? event.date : ''}
        />

        {errors.date && (
          <span className={classes.error}>
            {errors.date}
          </span>
        )}
      </p>

      <p>
        <label htmlFor="description">Description</label>

        <textarea
          id="description"
          name="description"
          rows="5"
          defaultValue={event ? event.description : ''}
        />

        {errors.description && (
          <span className={classes.error}>
            {errors.description}
          </span>
        )}
      </p>

      <div className={classes.actions}>
        <button
          type="button"
          onClick={cancelHandler}
          disabled={isSubmitting}
        >
          Cancel
        </button>

        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;