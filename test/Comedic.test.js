const assert = require('assert');
const request = require('supertest');
const app = require('../server');

describe('Server API', () => {
  it('should respond with status 200 for GET request to /api/project', async () => {
    const res = await request(app).get('/api/project');
    assert.strictEqual(res.status, 200);
  });

  it('should respond with JSON containing a message for POST request to /api/project/addProject', async () => {
    const projectData = {
      name: 'Project Name',
      description: 'Project Description'
    };

    const res = await request(app)
      .post('/api/project/addProject')
      .send(projectData);

    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.body.success.msg, 'Project created successfully');
    assert.strictEqual(typeof res.body.success.project, 'object');
    assert.strictEqual(res.body.success.project.name, projectData.name);
    assert.strictEqual(res.body.success.project.description, projectData.description);
    assert.strictEqual(res.body.success.project.isDeleted, false);
    assert.strictEqual(res.body.success.project.file, null);
    assert.strictEqual(res.body.success.project.followers.length, 0);
    assert.strictEqual(res.body.success.project.numberFollowers, 0);
    assert.strictEqual(res.body.success.project.sharedEmails.length, 0);
    assert.strictEqual(res.body.success.project.collaboratives.length, 0);
  });
});
