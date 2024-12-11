export const fetchData = async (url, options, onSuccess, onError) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    onSuccess(data);
  } catch (error) {
    onError(error.message);
  }
};
