import { Sequelize } from 'sequelize-typescript';
export declare const createDatebaseProviders: (entities: any, connection: string, sync?: boolean) => {
    provide: string;
    useFactory: (conns: Map<string, Sequelize>) => Promise<Sequelize>;
    inject: string[];
};
export declare const createModelProviders: (entities: any) => any[];
