import { PropsWithChildren } from "react";
import { RealmProvider, AppProvider, UserProvider } from "@realm/react";
import { Task } from "../models/Task";
import Login from "../components/Login";

const appId = `application-0-qufeomq`;
export default function RealmCustomProvider({ children }: PropsWithChildren) {
  return (
    <AppProvider id={appId}>
      <UserProvider fallback={Login}>
        <RealmProvider
          schema={[Task]}
          sync={{
            flexible: true,
            // onError: (_session, err) => {
            //   console.log(err);
            // },
            initialSubscriptions: {
              update(subs, realm) {
                subs.add(realm.objects(Task));
              },
            },
          }}
        >
          {children}
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  );
}
