
export async function GET(req) {
    return new Response(JSON.stringify({message: "API call successfully"}), { status: 200 });
}