import { getRepository, IsNull } from 'typeorm';
import Orphanages from '../models/Orgphanage';
import { Request, Response } from 'express';



export default {

    async index(req: Request, res: Response) {
        const orphanagesRepository = getRepository(Orphanages);
        const orphanages = await orphanagesRepository.find();
        return res.status(200).json(orphanages);

    },

    async create(req: Request, res: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weeks,
        } = req.body;

        const orphanagesRepository = getRepository(Orphanages);
        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weeks,
        });

        await orphanagesRepository.save(orphanage);

        return res.status(201).send({
            "msg": "OK"
        });
    },

    async show(req: Request, res: Response) {
        const { id } = req.params;

        if (isNotValidID(id)) {
            return res.status(404).send({ "error": "Invalid id." });
        }
        else {
            const orphanagesRepository = getRepository(Orphanages);
            const orphanage = await orphanagesRepository.findOne(id);

            if (!orphanageExists(orphanage)) {
                return res.status(404).send({ "error": "Orphanage not found." });
            }
            return res.status(200).send(orphanage);
        }
    }


}

function orphanageExists(orphanage: Orphanages | undefined) {
    return orphanage != null;
}

function isNotValidID(id: string) {
    return id === null || !Number(id);
}

