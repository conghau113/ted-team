import BaseService from './base.service';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface UserPayload {
  username: string;
  password: string;
}
interface Parameters {
  type: string;
  m_id: number;
}

class DemoService extends BaseService {
  getTest<T>(params: Parameters): Promise<AxiosResponse<T>> {
    const config: AxiosRequestConfig = { params };
    return this.get('/log-order', config);
  }

  createTest<T>(payload: UserPayload): Promise<AxiosResponse<T>> {
    return this.post('/log-order', payload);
  }
}

export default new DemoService();
