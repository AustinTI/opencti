import { describe, expect, it } from 'vitest';
import { ADMIN_USER, API_TOKEN, API_URI, FIVE_MINUTES, PYTHON_PATH, testContext } from '../../utils/testQuery';
import { execChildPython } from '../../../src/python/pythonBridge';

describe('Database provision', () => {
  const importOpts = [API_URI, API_TOKEN, './tests/data/DATA-TEST-STIX2_v2.json'];
  it(
    'Should import creation succeed',
    async () => {
      const execution = await execChildPython(testContext, ADMIN_USER, PYTHON_PATH, 'local_importer.py', importOpts);
      expect(execution).not.toBeNull();
      expect(execution.status).toEqual('success');
    },
    FIVE_MINUTES
  );
  // Python lib is fixed but we need to wait for a new release
  it(
    'Should import update succeed',
    async () => {
      const execution = await execChildPython(testContext, ADMIN_USER, PYTHON_PATH, 'local_importer.py', importOpts);
      expect(execution).not.toBeNull();
      expect(execution.status).toEqual('success');
    },
    FIVE_MINUTES
  );
});
