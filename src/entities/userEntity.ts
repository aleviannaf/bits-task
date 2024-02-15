import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Task from "./taskEntity";

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @OneToMany(() => Task, task => task.user)
    tasks: Task[];
}