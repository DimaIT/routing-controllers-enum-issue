import { getFromContainer, MetadataStorage } from 'class-validator';
import { defaultMetadataStorage } from 'class-transformer/storage';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { getMetadataArgsStorage } from 'routing-controllers';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import swaggerUi from 'swagger-ui-express';

export default function configureSwagger(app) {
  const storage = getMetadataArgsStorage();

  const metadatas = (getFromContainer(MetadataStorage) as any).validationMetadatas;
  const schemas = validationMetadatasToSchemas(metadatas, {
    classTransformerMetadataStorage: defaultMetadataStorage,
    refPointerPrefix: '#/components/schemas/'
  });

  // @ts-ignore different versions of routing controllers produce type error
  const spec = routingControllersToSpec(storage, {}, {
    components: {
      schemas,
    },
  });

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));
}
