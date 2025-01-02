"use client";
import { Provider } from "@supabase/supabase-js";
import { oAuthSignIn } from "./actions";
import { Button } from "@/components";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { ReactNode } from "react";

type OAuthProvider = {
	name: Provider;
	displayName: string;
	icon?: ReactNode;
};

export function OAuthButtons() {
	const oAuthProviders: OAuthProvider[] = [
		{
			name: "github",
			displayName: "GitHub",
			icon: <BsGithub className="size-5" />,
		},
		{
			name: "google",
			displayName: "Google",
			icon: <BsGoogle className="size-5" />,
		},
	];

	return (
		<>
			{oAuthProviders.map((provider, index) => (
				<Button
					duration="400"
					key={index}
					className="w-full flex items-center justify-center gap-2 border-2 border-secondary text-secondary hover:bg-secondary hover:text-black"
					variant="outline"
					onClick={async () => {
						await oAuthSignIn(provider.name);
					}}
				>
					{provider.icon}
					{provider.displayName}
				</Button>
			))}
		</>
	);
}