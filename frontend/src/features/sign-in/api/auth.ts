import {ref} from 'vue';
import {useApiFetch} from '~/shared/api/use-api-fetch.ts';
import {useAccountStatusStore} from '~/entities/account-status';
import {SuccessResponse} from '~/shared/api/response.ts';
import {TAccountStatus} from '~/shared/api/account-status.ts';


// TODO: мне кажется, это не в папке api должно лежать, а в ui. Или model.
// тут точно намешаны слои компонента, api и модели...
export function useAuth() {
    const email = ref<string>('');
    const password = ref<string>('');
    const accountStatusStore = useAccountStatusStore();

    async function auth() {
        const {response} = await useApiFetch('/login').json().post({
            email: email.value,
            password: password.value,
        });

        if (response.value?.ok) {
            const json = (await response.value?.json()) as SuccessResponse<TAccountStatus>;

            accountStatusStore.setAuthorization(json.data);
        }
    }

    return {
        email,
        password,

        auth,
    };
}
