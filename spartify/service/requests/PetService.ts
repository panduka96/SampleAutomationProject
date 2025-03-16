import { newPet, updatePet } from "../payloads/PetPayloads";
import { SpartiNet } from "@spartify.io/spartify-engine";

const spartiAPI = new SpartiNet().HTTP;

class PetService {
  static async addPet() {
    await spartiAPI.setBaseUrl("https://petstore.swagger.io/v2/");
    await spartiAPI.setUrl("pet");
    await spartiAPI.request.step_post_pet(newPet);
    expect(spartiAPI.request.body.status).to.eq(200);
    expect(spartiAPI.request.body.name).to.eq(newPet.name);
    await spartiAPI.setValue("petId", spartiAPI.request.body.id);
  }

  static async updatePet() {
    await spartiAPI.setUrl("pet");
    await spartiAPI.request.step_put_pet(updatePet);
    expect(spartiAPI.request.body.status).to.eq(200);
    expect(spartiAPI.request.body.name).to.eq(updatePet.name);
  }

  static async getPetById() {
    await spartiAPI.setUrl(`pet/${spartiAPI.getValue("petId")}`);
    await spartiAPI.request.step_get_pet();
    expect(spartiAPI.request.body.status).to.eq(200);
    expect(spartiAPI.request.body.id).to.eq(spartiAPI.getValue("petId"));
    expect(spartiAPI.request.body.name).to.eq(updatePet.name);
  }

  static async deletePet() {
    await spartiAPI.setUrl(`pet/${spartiAPI.getValue("petId")}`);
    await spartiAPI.request.step_delete_pet();
    expect(spartiAPI.request.body.status).to.eq(200);
    expect(spartiAPI.request.body.message).to.eq(
      `Pet ${spartiAPI.request.getValue("petId")} deleted`
    );
  }

  static async findPetsByStatus(status: string) {
    await spartiAPI.setUrl(`pet/findByStatus?status=${status}`);
    await spartiAPI.request.step_get_pet();
    expect(spartiAPI.request.body.status).to.eq(200);
    expect(spartiAPI.request.body.length).to.be.greaterThan(0);
  }
}

export default PetService;
