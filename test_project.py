from project import app,index,animegenre,moviegenre
import pytest

@pytest.fixture
def client():
    app.config.update({"TESTING": True})

    with app.test_client() as client:
        yield client


def test_index(client):
    response = client.get("/")
    assert response.status_code == 200
    assert b"Entertainment Recommender" in response.data

def test_animegenre(client):
    response = client.post("/animegenre", data={'selected':1})

    assert response.content_type == 'application/json'
    assert response.status_code == 200
    assert b'{"desc":' in response.data

def test_moviegenre(client):
    response = client.post("/moviegenre", data={'selected':'Drama'})

    assert response.content_type == 'application/json'
    assert response.status_code == 200
    assert b'{"desc":' in response.data