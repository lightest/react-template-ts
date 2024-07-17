export const API = {
    async fetchExpenses()
    {
        const resp = await fetch("https://expenses-backend-mu.vercel.app/expenses", {
            headers: {
                "Content-Type": "application/json",
                Username: "nikita.agafonov"
            }
        });

        const data = await resp.json();

        return data;
    }
};
