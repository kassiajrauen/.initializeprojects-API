import * as initializationRepository from "../repositories/initializationRepository.js";

export async function createInitialization(
  initialization: initializationRepository.initializationData
) {
  await initializationRepository.create(initialization);
}

export async function getInitializations(userId: number) {
  return await initializationRepository.getAll(userId);
}

export async function removeInitialization(id: number) {
  await initializationRepository.remove(id);
}
