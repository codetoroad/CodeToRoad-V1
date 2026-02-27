const API_BASE = "https://api.codetoroad.in"

async function loadBlogs() {
  try {
    const response = await fetch(`${API_BASE}/api/blog`)
    const blogs = await response.json()

    const blogContainer = document.getElementById("blog-list")
    blogContainer.innerHTML = ""

    if (!blogs.length) {
      blogContainer.innerHTML = "<p>No blogs available yet.</p>"
      return
    }

    blogs.forEach(blog => {
      const div = document.createElement("div")
      div.className = "blog-card"
      div.innerHTML = `
        <h3>${blog.title}</h3>
        <p>${blog.content}</p>
      `
      blogContainer.appendChild(div)
    })

  } catch (error) {
    console.error("Failed to load blogs:", error)
    document.getElementById("blog-list").innerHTML =
      "<p>Failed to load blogs.</p>"
  }
}

document.addEventListener("DOMContentLoaded", loadBlogs)