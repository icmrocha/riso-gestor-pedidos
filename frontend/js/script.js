function showPage(page) {
    const content = document.getElementById("content");
    content.innerHTML = `<h2>${page} em construção...</h2>`;
  }

  async function fetchMesas() {
    try {
      const response = await fetch("http://localhost:3000/api/teste");
      const data = await response.json();
      console.log("Dados das mesas:", data);
    } catch (error) {
      console.error("Erro ao buscar mesas:", error);
    }
  }
  
  fetchMesas();