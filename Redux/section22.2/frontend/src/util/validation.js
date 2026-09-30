export function validateEvent(eventData) {
  const errors = {};

  if (!eventData.title || eventData.title.trim() === '') {
    errors.title = 'Title is required';
  }

  if (!eventData.image || eventData.image.trim() === '') {
    errors.image = 'Image URL is required';
  }

  if (!eventData.date) {
    errors.date = 'Date is required';
  }

  if (!eventData.description || eventData.description.trim() === '') {
    errors.description = 'Description is required';
  }

  return errors;
}