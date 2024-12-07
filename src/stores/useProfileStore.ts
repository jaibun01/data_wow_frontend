import { IResGetProfile } from '@/features/form-signin/interfaces';
import { helper } from '@/utils/helpers';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface IProfileStore {
  data: IResGetProfile;
  setDataProfile: (_data: IResGetProfile) => void;
  onReset: () => void;
}

const defaultProfile: IResGetProfile = {
  "sub": "",
  "username": "",
  "iat":  0,
  "exp":  0,
};
const useProfileStore = create<IProfileStore>()(
  devtools(
    persist(
      (set) => ({
        data: defaultProfile,
        setDataProfile: (_data: IResGetProfile) => {
          // console.log(_data)
          set((state) => ({
            data: {
              ...state.data,
              ..._data,
              access_token: helper.getLocalStorage('token') as string
            }
          }));
        },
        onReset: () => {
          set((prev) => ({
            ...prev,
            data: defaultProfile
          }));
          helper.clearLocalStorage();
        }
      }),
      { name: 'wowProfileStore' }
    )
  )
);

export default useProfileStore;
