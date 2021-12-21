const NODE_ENV: string | undefined = process.env.NODE_ENV;

if (NODE_ENV === 'development') {
    console.log(NODE_ENV);
}

export * from './validation.config';
