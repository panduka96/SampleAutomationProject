import { spartiSuite } from "@spartify.io/spartify-engine";
import PetService from "../service/requests/PetService";

spartiSuite("Petstore API Tests", () => {
  it("Pet store api call for create", async () => {
    await PetService.addPet();
  });

  it("Pet store api call for update", async () => {
    await PetService.updatePet();
  });

  it("Pet store api call for delete", async () => {
    await PetService.findPetsByStatus("available");
  });
});
