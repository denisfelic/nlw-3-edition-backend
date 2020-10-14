import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


// TODO: Define the types for properties below, and other files,  set to "true" or comment
// The function  "strictPropertyInitialization" in tsconfig.ts file.
@Entity("orphanages")
export default class Orphanage {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weeks: string;


}