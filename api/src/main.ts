import { ValidationPipe, VersioningType } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { config } from "./configs";

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);

    app.enableVersioning({
        type: VersioningType.URI,
    });

    app.useGlobalPipes(new ValidationPipe(config.validationOptions));

    await app.listen(config.PORT);
}
bootstrap();
