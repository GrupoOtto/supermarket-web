import BaseError from './baseError';
import React from 'react';

const error403 = () => <BaseError title="403" body="Permiso denegado" />;

export default error403;
