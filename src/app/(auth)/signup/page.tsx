import { Button, Card } from '@/components'
import Logo from '@/components/Logo'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { emailLogin } from './actions'
import Link from 'next/link'
import styles from './SignUp.module.css'
import { OAuthButtons } from './OAuthButtons'

interface PageProps {
	searchParams: { [key: string]: string | string[] | undefined }
}

const Home = async ({ searchParams }: PageProps) => {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (user) {
		return redirect("/todos");
	}

	return (
		<div className="min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
			<Card className="w-full max-w-md p-8 space-y-8 shadow-lg border border-gray-200 dark:border-gray-800">
				<div className="text-center">
					<Logo className="mx-auto h-12 w-auto text-2xl md:text-5xl lg:text-6xl" />
					<h2 className="mt-6 text-lg md:text-3xl text-gray-900 dark:text-gray-100">
						Welcome back
					</h2>
				</div>
				<form id="login-form" className="mt-8 space-y-6">
					<div className="space-y-4">
						<div className='flex items-center justify-between w-full bg-gray-600/10 p-4 rounded-lg'>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								className={`${styles.input} mt-1 block w-full pr-2 bg-gray-100 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary`}
								placeholder="m@example.com"
							/>
						</div>
						<div className='flex items-center justify-between w-full bg-gray-600/10 p-4 rounded-lg'>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className={`${styles.input} mt-1 block w-full pr-2 bg-gray-100 bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary`}
								placeholder="*Choose a strong password"
								minLength={6}
							/>
						</div>
					</div>

					{searchParams.message && (
						<div className="text-sm font-medium text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 p-3 rounded-md">
							{searchParams.message}
						</div>
					)}

					<div>
						<Button
							formAction={emailLogin}
							className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
						>
							Sign in
						</Button>
					</div>
				</form>
				<div className='flex items-center justify-between space-x-4'>
					<OAuthButtons />
				</div>
				<div className="text-sm text-center">
					<Link href="/signup" className="font-medium text-secondary hover:text-primary-dark">
						Don&rsquo;t have an account? Sign up
					</Link>
				</div>
			</Card>
		</div>
	)
}

export default Home

