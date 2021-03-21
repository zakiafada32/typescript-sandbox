import axios, { AxiosResponse } from 'axios';

export class Sync {
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((res: AxiosResponse): void => {
        this.set(res.data);
      });
  }

  save(): void {
    const id = this.data.id;
    if (id) {
      axios.put(`http://localhost:3000/users/${'id'}`, this.data);
    } else {
      axios.post(`http://localhost:3000/users/`, this.data);
    }
  }
}
