import { INestApplication, INestExpressApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
    let app: INestApplication ;

    try {
        app = await NestFactory.create(AppModule);
        app.setGlobalPrefix('test');

        await app.listen(3008);
    }
    catch (err) {
        // error should be logged.
        console.log(err);
    }
}

bootstrap().catch((error) => {
    // error should be logged, if it wasn't in the try/catch above, e.g.
    console.error('error caught from bootstrap', error);
});
