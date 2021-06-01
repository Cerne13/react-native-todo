import React, { useState } from 'react';

import { TodoState } from './src/context/todo/TodoState';
import { ScreenState } from './src/context/screen/ScreenState';
import { MainLayout } from './src/MainLayout';

export default function App() {
	return (
		<ScreenState>
			<TodoState>
				<MainLayout />
			</TodoState>
		</ScreenState>
	);
}
