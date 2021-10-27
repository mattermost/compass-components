export type TransientProperty<T> = { [P in keyof T & string as `$${P}`]: T[P] };
