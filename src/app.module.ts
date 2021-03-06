import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
@Module({
    imports: [
    ],
    providers: [
        {
            provide: Object,
            useFactory: async () => doSomething()
        }
    ]
})
export class AppModule implements NestModule {

    constructor() {
    }

    public configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer
            .apply()
            .forRoutes('*');
    }
}


export async function doSomething(): Promise<Object> {
    console.log(await getPromises());

    // I would expect this error to bubble up, so my catch in main.ts would be able to log it.
    throw {
        message: 'sample error that was thrown. why is this swallowed?'
    };

    // this works:
    // return {};
}

async function getPromises(): Promise<number> {
    return getinnerPromise();
}

async function getinnerPromise(): Promise<number> {
    return 5;
}