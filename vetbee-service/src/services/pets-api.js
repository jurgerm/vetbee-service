const API_URL = "http://localhost:8081/v1";

export class PetsApi {
  static async all(token) {
    const res = await fetch(
      `${API_URL}/pets`,
      {
        method: "GET",
        headers: {
          //  authorization: `Bearer ${token}` 
        }
      }
    );

    return res.json();
  }

  static async add(pet) {
    if (!pet) throw new Error("No argument");

    const res = await fetch(
      `${API_URL}/pets`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
      }
    );

    return res.json();
  }

  static async delete(id) {
    if (!id) throw new Error("No argument");

    const res = await fetch(
      `${API_URL}/pets/${id}`,
      {
        method: "DELETE",
      }
    );

    return res.json();
  }

  static async update(id, update) {
    if (!id || !update) {
      throw new Error("Missing arguments");
    }

    const res = await fetch(
      `${API_URL}/pets/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),
      }
    );

    return res.json();
  }
}
