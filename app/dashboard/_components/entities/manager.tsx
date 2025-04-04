@Entity()
export class Manager {
    @PrimaryGeneratedColumn('uuid')
    managerId: string;

    @Column('text')
    managerFullName: string;

    @Column('float')
    managerSalary: number;

    @Column('text', {
        unique: true
    })
    managerEmail: string;

    @Column('text')
    managerPhoneNumber: string;

    @OneToOne(() => Location)
    location: Location;
}