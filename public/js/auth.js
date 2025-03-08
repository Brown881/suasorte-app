// Inicializa o Supabase
const supabaseUrl = 'https://otoiivstqcurbppukqrr.supabase.co'; // Sua URL do Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90b2lpdnN0cWN1cmJwcHVrcXJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzODc5MzMsImV4cCI6MjA1Njk2MzkzM30.2DfnpL1pW1dyCsuDkxzmIcef_cplsRLamJ5TgJDA0MM'; // Sua chave pública
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

console.log("Supabase inicializado:", supabaseClient); // Log para depuração

// Função de login
async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    console.log("Tentando autenticar com:", email, password); // Log para depuração

    try {
        // Consulta o Supabase
        const { data, error } = await supabaseClient
            .from('users')
            .select('*')
            .eq('email', email)
            .eq('password', password)
            .single();

        console.log("Resposta do Supabase:", data, error); // Log para depuração

        if (error) throw error;

        if (data) {
            localStorage.setItem('userPlan', data.plan);
            window.location.href = "apostas.html";
        } else {
            errorMessage.textContent = "Email ou senha incorretos.";
        }
    } catch (error) {
        console.error("Erro ao conectar ao servidor:", error); // Log para depuração
        errorMessage.textContent = "Erro ao conectar ao servidor.";
    }
}