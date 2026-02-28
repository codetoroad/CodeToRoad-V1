export async function handleRideRoutes(request, env) {
  const API_KEY = env.YOUTUBE_API_KEY;
  const CHANNEL_ID = "UCGrUpSsR3eZLNTMxTQsNWIw";

  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=8&type=video`;

  const response = await fetch(url);
  const data = await response.json();

  const rides = data.items.map(video => ({
    id: video.id.videoId,
    title: video.snippet.title,
    thumbnail: video.snippet.thumbnails.high.url,
    publishedAt: video.snippet.publishedAt
  }));

  return new Response(JSON.stringify(rides), {
    headers: { "Content-Type": "application/json" }
  });
}