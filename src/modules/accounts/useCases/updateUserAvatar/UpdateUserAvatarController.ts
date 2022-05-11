import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpadateUserAvatarController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const avatar_file = request.file.filename;

    const updateAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    await updateAvatarUseCase.execute({ user_id, avatar_file });

    return response.status(204).send();
  }
}

export { UpadateUserAvatarController };