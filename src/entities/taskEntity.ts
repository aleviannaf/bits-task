import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./userEntity";

@Entity('task')
export default class Task {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    title: string

    @Column("text")
    content: string

    @CreateDateColumn({ type: 'timestamp',  default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @ManyToOne(() => User, user => user.tasks, { nullable: false })
    user: User;
}