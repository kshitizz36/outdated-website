export const handler = async (event) => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({ name: 'John Doe' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error' })
        };
    }
}