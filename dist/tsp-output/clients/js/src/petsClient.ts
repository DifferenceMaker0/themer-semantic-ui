import type { BearerTokenCredential } from "@typespec/ts-http-runtime";
import { createPetsClientContext, type PetsClientContext, type PetsClientOptions } from "./api/petsClientContext.js";
import { createPet, type CreatePetOptions, deletePet, type DeletePetOptions, getPet, type GetPetOptions, listPets, type ListPetsOptions, updatePet, type UpdatePetOptions } from "./api/petsClientOperations.js";
import { createToysClientContext, type ToysClientContext, type ToysClientOptions } from "./api/toysClient/toysClientContext.js";
import { createToy, type CreateToyOptions, deleteToy, type DeleteToyOptions, listToys, type ListToysOptions, updateToy, type UpdateToyOptions } from "./api/toysClient/toysClientOperations.js";
import type { Pet, Toy } from "./models/models.js";

export class PetsClient {
  #context: PetsClientContext
  toysClient: ToysClient
  constructor(credential: BearerTokenCredential, options?: PetsClientOptions) {
    this.#context = createPetsClientContext(credential, options);
    this.toysClient = new ToysClient(credential, options);
  }
  async listPets(requestId: string, options?: ListPetsOptions) {
    return listPets(this.#context, requestId, options);
  };
  async getPet(petId: number, requestId: string, options?: GetPetOptions) {
    return getPet(this.#context, petId, requestId, options);
  };
  async createPet(pet: Pet, requestId: string, options?: CreatePetOptions) {
    return createPet(this.#context, pet, requestId, options);
  };
  async updatePet(
    petId: number,
    pet: Pet,
    requestId: string,
    options?: UpdatePetOptions,
  ) {
    return updatePet(this.#context, petId, pet, requestId, options);
  };
  async deletePet(
    petId: number,
    requestId: string,
    options?: DeletePetOptions,
  ) {
    return deletePet(this.#context, petId, requestId, options);
  }
}
export class ToysClient {
  #context: ToysClientContext

  constructor(credential: BearerTokenCredential, options?: ToysClientOptions) {
    this.#context = createToysClientContext(credential, options);

  }
  async listToys(petId: number, requestId: string, options?: ListToysOptions) {
    return listToys(this.#context, petId, requestId, options);
  };
  async createToy(
    petId: number,
    toy: Toy,
    requestId: string,
    options?: CreateToyOptions,
  ) {
    return createToy(this.#context, petId, toy, requestId, options);
  };
  async updateToy(
    petId: number,
    toyId: number,
    toy: Toy,
    requestId: string,
    options?: UpdateToyOptions,
  ) {
    return updateToy(this.#context, petId, toyId, toy, requestId, options);
  };
  async deleteToy(
    petId: number,
    toyId: number,
    requestId: string,
    options?: DeleteToyOptions,
  ) {
    return deleteToy(this.#context, petId, toyId, requestId, options);
  }
}
