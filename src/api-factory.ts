import {BaseAPI, Configuration} from '@test-work/openapi-rxjs';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

export class ApiFactory {

    create<T extends BaseAPI>(
        BaseApiImpl: { new(configuration: Configuration): T },
    ): Observable<T> {
        const baseApi = of<T>(new BaseApiImpl(new Configuration({basePath: 'http://localhost:8080'})))

        return baseApi.pipe(
            tap((api: T | any | { intercepted: boolean }) => {
                if (!api.intercepted) {
                    api.intercepted = true;
                }
            })
        );
    }
}

export const apiFactory = new ApiFactory();
