
export async function GET(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust this as necessary
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return new Response(JSON.stringify({message: "API call successfully"}), { status: 200 });
}