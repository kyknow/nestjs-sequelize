import { DynamicModule } from '@nestjs/common';
import { DatabaseModuleOptions, DatabaseModuleAsyncOptions } from './database.interface';
export declare class DatabaseCoreModule {
    static forRoot(options: DatabaseModuleOptions): DynamicModule;
    static forRootAsync(options: DatabaseModuleAsyncOptions): DynamicModule;
}
