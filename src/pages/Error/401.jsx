import BaseError from './baseError';
import React from 'react';

const error401 = () => <BaseError title="401" body="No autorizado" />;

export default error401;
