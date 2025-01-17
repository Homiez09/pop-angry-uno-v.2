const index = `<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="/static/dist/output.css" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  <script src="/static/app.js"></script>
  <title>POPUNO</title>
</head>
<body id="clickArea" class="bg-gradient-to-r from-bg1 from-25% to-bg2 to-80%">
  <div class="text-9xl text-center mt-5">
    <h1
      class="leading-relaxed text-center text-6xl font-bold font-sans text-brown7 hover:text-brown5 align-text-bottom"
    >
      POPUNO
    </h1>
  </div>

  <div class="text-center text-5xl m-0">
    <p id="score" class="leading-relaxed font-bold font-sans text-brown5">0</p>
  </div>

  <img id="first"
    class="mr-auto ml-auto mb-auto mt-auto h-auto w-auto flex-auto items-center object-none h-50 w-50 scale-100"
    src="/static/images/first.png"
    alt=""
  />
</body>
</html>`

module.exports = { index };