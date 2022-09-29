
export const url = "https://cars4.azurewebsites.net/api/cars/"

export async function handleHttpErrors(res) {
    if (!res.ok) {
      const errorResponse = await res.json();
      const error = new Error(errorResponse.message)
      error.apiError = errorResponse
      throw error
    }
    return res.json()
  }