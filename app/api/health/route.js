
export async function GET(req) {
    const headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
  
    return new Response(
      JSON.stringify({ message: "API call successfully" }),
      {
        status: 200,
        headers: headers,
      }
    );
  }