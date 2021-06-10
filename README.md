## 10강 컴포넌트의 속성값과 상탯값

```
UI데이터를 다루는 방법
 1. 속성값이나 상태값으로 관리해야한다.
 2. 리액트가 값이 변경되었다는 것을 알려면 상태값으로 관리해야한다.
 3. 부모컴포넌트가 렌더링될 때마다 자식 컴포넌트도 렌더링 되는데 이때 자식의 속성값이 변경되지 않았을때 굳이 렌더링 할 필요 없을 수 있다.
      -> React.memo를 사용하면 속성값이 변경되었을 때만 재 렌더링 됨
 4. 불변변수: '변수의 값을 바꿀 수 없다'
 5. 속성값은 불변변수이기 때문에 값을 변경하려고 하면 에러가 발생
 6. 상태값도 불변변수처럼 관리하는 것이 좋다.
```

## 11강 컴포넌트 함수의 반환값

```
 1. 리액트 요소, 컴포넌트, 문자열, 숫자, 배열, Fragment, null, boolean
 2. 배열로 반환할때는 리액트 요소가 항상 key를 가지고 있어야 한다.
 3. Fragment는 key를 필요로 하지 않음. 여러개의 요소를 반환할 때 유용하게 사용할 수 있다.
      -> <></>와 동일
 4. null, boolean값은 무시된다.
```

## 12강 리액트 요소와 가상돔1

```
 1. 리액트는 렌더링 성능을 위해 가상돔을 활용한다.
    리액트는 메모리에 가상돔을 올려놓고 이전과 이후의 가상돔을 비교한뒤 변경된 부분만 실제 돔에 반영하는 전략을 채택함.
 2. 컴포넌트의 key를 변경하게되면 컴포넌트가 삭제되었다가 다시 생성된다.
    이렇게 컴포넌트가 삭제되는것을 unmount라고 부르고 컴포넌트가 추가되는것을 mount라고 부른다.
```

## 13강 리액트 요소와 가상돔2

```
 가상돔 이해하기
 1. 리액트에서 데이터 변경에 의한 화면 업데이트는 렌더단계와 커밋단계를 거친다.
    렌더단계는 실제돔에 반영할 변경사항을 파악하는 단계이고 커밋단계는 파악된 변경 사항을 실제 돔에 반영하는 단계이다.
    렌더단계에서는 변경사항을 파악하기 위해서 가상 돔을 이용. 가상돔은 리액트 요소로부터 만들어진다.
 2. 리액트는 렌더링을 할 때마다 가상 돔을 만들고 이전의 가상돔과 비교. 이는 실제 돔의 변경 사항을 최소화 하기 위한 과정
 3. 리액트 요소 트리가 실제 돔으로 만들어지기 위해서는 모든 리액트 요소의 타입 속성값이 문자열이여야 한다.
 4. 첫번째 렌더 ReactDOM.render로 렌더 실행 -> 상태값 변경 함수에 의해서 수행되는 렌더 실행
```

## 14강 리액트 훅 기초 익히기 1

```
 1. 컴포넌트에 기능을 추가할 때 사용하는 함수 ex) 컴포넌트에 상탯값 추가, 자식요소에 접근
 2. useState: 상탯값 추가
 3. useEffect: 부수효과 처리
      - 서버 API 호출, 이벤트 핸들러 등록 등
 4. 리액트는 효율적으로 렌더링 하기 위해서 여러 개의 상태값 변경 요청을 배치로 처리한다.
```

## 15강 리액트 훅 기초 익히기 2

```
	useEffect(부수효과함수,의존성배열)
 1. 의존성 배열에는 부수 효과 함수에서 사용한 변수를 잘 봐야 한다.
 2. 컴포넌트의 상태값이나 속성값 또는 컴포넌트 내부에 정의된 지역 변수나 지역 함수 같은 것들은 모두 의존성 배열에 작성해줘야 한다.
 3. 상태값 변경 함수는 예외적으로 의존성 배열에 입력하지 않아도 괜찮다.
 4. 부수 효과 함수에서 반환하는 이 함수는 다음 부수 효과 함수가 호출되기 직전에 호출된다. 또는 컴포넌트가 사라기지 직전에 마지막으로 호출 된다.
```

## 16강 훅 직접 만들기

```
	훅 분리
```

## 17강 훅 사용 시 지켜야 할 규칙

```
 1. 하나의 컴포넌트에서 훅을 호출하는 순서는 항상 같아야 한다.
      - if문 안에서 훅을 사용하면 안됨
	  - for문 안에서도 사용하면 안됨
	  - 일반 함수 안에서 훅을 호출하면 안됨
 2. 훅은 함수형 컴포넌트 또는 커스텀 훅 안에서만 호출 되어야 한다.
```

## 21강 리액트 내장 훅

```
 useRef
   - ref객체는 꼭 돔 요소를 참조할 때만 사용할 수 있는 것은 아니다.
   - 렌더링과 상관없는 값을 저장할 때 useRef가 유용하게 사용될 수 있다.
   -

 useMemo
   - 계산량이 많은 함수의 반환값을 재활용 하는 용도로 사용

 useCallback
   - useMemo와 유사
   - 함수 메모제이션에 특화된 훅이다.

 useReducer
   - 여러개의 상태값을 관리 할 때에는 useReducer를 사용하는 것이 좋다.
   - useReducer 훅과 Context api를 이용해서 깊은 곳까지 상태관리를 편하게 할 수 있다.

 useImplerativeHandle
   - 클래스형 컴포넌트의 부모 컴포넌트는 ref 객체를 통해서 자식 컴포넌트의 메소드를 호출 할 수 있다.
     이 방식은 자식 컴포넌트의 내부 구현에 대한 의존성이 생기기 때문에 지양해야 하지만 종종 필요한 경우가 생긴다.
	 이 때 useImplerativeHandle 훅을 이용하면 마치 멤버 변수나 멤버 함수가 있는 것 처럼 만들 수 있다.

 useLayoutEffect
   - useEffect훅에서는 부수효과 함수는 렌더링 결과가 돔에 반영된 후에 비동기로 호출 되는데,
     useLayoutEffect 훅은 useEffect와 거의 비슷하게 동작하는데 부수효과 함수를 동기로 호출한다는 점이 다르다.
	 즉,부수효과 함수가 렌더링 결과가 돔에 반영된 직후에 바로 호출된다. 그래서 useLayoutEffect 에서 연산을 많이하면
	 브라우저가 먹통이 될 수 있다. 특별한 이유가 없다면 useEffect훅을 사용
   - 사용예: 렌더링 직후에 돔 요소의 값을 읽어들이는 경우 또는 조건에 따라서 컴포넌트를 다시 렌더링 하고 싶은 경우
   - 실행 시점: useLayoutEffect에 입력된 부수효과 함수가 실행 되는 시점은 리액트가 렌더링하고 실제 돔에 반영은 했지만
             브라우저가 화면에 그리기 전에 동기로 실행된다.

 useDebugValue
   - 커스텀 훅에서 디버깅할 때 유용하게 사용할 수 있음

 1. useMemo,useCallback은 메모제이션 기능을 제공. 그래서 이전 값을 재활용 할 수 있음
 2. useReducer는 여러 개의 상태 값을 하나의 훅으로 관리할 때 편리하게 사용 할 수 있음
```

## 27,28강 useEffect 실전 활용법

```
 1. useCallBack을 이용해서 useEffect 밖에서 함수를 생성할 때 다시 생성되지 않게 만들어 줘야 useEffect의 무한 호출을 막을 수 있다.
 2. 가능하다면 의존성 배열을 사용하지 않는 것이 좋다. 의존성 배열을 입력하지 않는 대신 부수효과 함수 내에서 실행 시점을 조절할 수 있다. 이렇게
    함수의 실행 시점을 의존성 배열로 관리하지 않고 부수효과 함수 내에서 처리를 하면 이 부수효과 함수 안에서 사용하는 모든 변수는 최신화된 값을 참조하므로
	안심할 수 있다.
 3. 이전 상태 값을 기반으로 다음 상태 값을 계산하기 위해 상태값을 의존성 배열에 추가하지 말고 상태값 변경 함수에 함수를 입력하면 의존성 배열을 사용하지 않을 수 있음
 4. 여러 상태값을 참조하면서 값을 변경할 때에는 useReducer 훅을 사용하는 것이 좋다. dipatch함수는 변하지 않는 값이므로 의존성 배열로 빈 배열을 입력한 것과
    같은 의미가 될 수 있다. 값을 변경하는 로직은 reducer에서 작성. useReducer를 사용하면 다양한 액션과 상태값을 관리하기가 용이하고
	상태값 변경 로직을 여러 곳에서 재사용하기에도 좋다.
 5. 상황에 따라 의존성 배열을 제거하는 마땅한 방법이 보이지 않을 수 있다. 이때 useRef훅이 손쉬운 해결책이 될 수 있다.
	렌더링이 될 때마다 ref 객체에 onClick 함수를 넣어주고 원래 사용하려던 곳에서 ref 객체를 이용해서 함수를 호출하는 방식이다.
 6. ref 객체는 컴포넌트 함수에서 직접 변경해도 된다고 생각할 수 있지만 한가지 문제가 있다. 부수효과 함수에서 ref 객체를 수정하는 이유는
    나중에 도입될 리액트의 concurrent mode 때문이다. concurrent(동시성) mode로 동작할 때에는 컴포넌트 함수가 실행 됐다고 하더라도
	중간에 렌더링이 취소될 수 있다. 렌더링은 취소됐는데 ref 객체에는 잘못된 값이 저장될 수 있으므로 ref객체는 컴포넌트 함수에서 직접 수정하면 안된다.
```

## 29,30,31강 렌더링 속도를 올리기 위한 성능 최적화 방법

```
 1. 리액트가 실행될 때 가장 많은 CPU자원을 사용하는 것은 렌더링이다. 리액트는 UI 라이브러리이기 때문에 프로그램이 실행되는 동안에 화면을 그리고 또 그린다.
	리액트는 데이터와 컴포넌트 함수로 화면을 그린다. 그 과정에서 대부분의 연산은 컴포넌트 함수의 실행과 가상돔에서 발생. 여기서 데이터는 컴포넌트의 상태값과 속성값을 의미
	만약 렌더링이 필요하다고 판단되면 컴포넌트 함수를 호출해서 새로운 가상 돔을 만들고 이전에 만들었던 가상돔과 비교해서 변경점을 찾는다. 그리고 변경된 부분을 실제 돔에
	반영.
 2. React.memo 사용
 3. 데이터를 불변 데이터로 관리하면 이전/이후 값의 단순 비교만으로 컴포넌트의 속성값이 변경됐는지 알 수 있다. 즉 상태값을 불변 객체로 관리.

불필요하게 컴포넌트 함수가 실행되는 것을 막아서 성능을 최적화
	- 컴포넌트 내부에서 생성되는 함수와 객체
		- 값이 너무 자주 변경되서 성능에 안좋은 영향을 미친 경우

		function Parent() {
			const [selectedFruit, setSelectedFruit] = useState('apple');
			const [count, setCount] = useState(0);

			return (
				<div>
					<p>{`count: $(count)`}</p>
					<button onClick={() => setCount(count+1)}>increase count</button>
					<SelectFruit
						selected={selectFruit}
						onChange={fruit => setSelectedFruit(fruit)}
					/>
				</div>
			)
		1. 이 Parent 컴포넌트가 상태값 변경에 의해서 렌더링을 할 때 자식 컴포넌트도 렌더링을 할텐데, 이 자식 컴포넌트에서 리액트 memo함수를 사용했다고 했을 때
		   만약 이 selected 속성값이 변경되지 않으면 이 자식 컴포넌트는 렌더링이 되지 않을 거라고 생각하기 쉽다. 하지만 지금과 같이 함수를 작성하면
		   매번 렌더링을 할 때마다 새로운 값이 입력되기 때문에 리액트 memo를 사용했다고 하더라도 이 컴포넌트는 렌더링이 된다.
		   지금과 같이 단순하게 상태값을 변경하는 로직이라면
		   onChange={setSelectedFruit} 이렇게 상태값 변경함수를 그대로 입력해주면 간단하게 해결할 수 있다. 왜냐하면 상태값 변경 함수는 한번 생성되고
		   변경되지 않기 때문이다. 만약 이벤트 핸들러에서 간단하게 처리되지 않는다면 useCallback을 이용해서 작성하면 이 함수가 필요할 때만 변경이될 것이다.
		   function Parent() {
			const [selectedFruit, setSelectedFruit] = useState('apple');
			const [count, setCount] = useState(0);

			const onChangeFruit = useCallback(fruit => {
			   setSelectedFruit(fruit);
			   sendLog({type:'fruit change', value: fruit});
		   },[])

			return (
				<div>
					<p>{`count: $(count)`}</p>
					<button onClick={() => setCount(count+1)}>increase count</button>
					<SelectFruit
						selected={selectFruit}
						onChange={onChangeFruit}
					/>
				</div>
			)
		   지금같은 경우에는 useCallback안에 상태값이나 속성값이 사용되지 않았기 때문에 빈 배열을 입력했고 따라서 onChangeFruit 함수는 한번 생성된 값으로 고정된다.

		2. 함수와 마찬가지로 컴포넌트 내부에서
		function SelectFruit({selectFruit,onChange}) {
		  //...
		  return(
			<div>
			  <Select
				options={[
					{ name: 'apple', price: 500 },
					{ name: 'banana', price: 1000 },
					{ name: 'orange', price: 1500 },
				]}
				selected={selectFruit}
				onChange={onChange}
			  />
			</div>
		  )
		}
		함수와 마찬가지로 컴포넌트 내부에서 이렇게 객체를 정의해서(options) 자식 컴포넌트의 속성값으로 입력하면 객체의 내용이 변경되지 않아도 자식 컴포넌트 입장에서는
		속성값이 변경되었다고 인식한다. 이렇게 과일 목록이 항상 같은 값을 가지고 있다면 컴포넌트 밖으로 빼서 상수 변수로 관리해서 입력하면
		이 값은 변하지 않는 값이 된다.
		function SelectFruit({selectFruit,onChange}) {
		  //...
		  return(
			<div>
			  <Select
				options={FRUITS.filter(item => item.price <= maxPrice)}
				selected={selectFruit}
				onChange={onChange}
			  />
			</div>
		  )
		}

		const FRUITS = [
					{ name: 'apple', price: 500 },
					{ name: 'banana', price: 1000 },
					{ name: 'orange', price: 1500 },
		];
		하지만 filter 연산을하면 또 새로운 배열이 만들어지기 때문에 렌더링 할때마다 새로운 값이 된다.
		이때는 useMemo 훅을 이용하면 된다.
		function SelectFruit({selectFruit,onChange}) {
		  //...
		  const fruits = useMemo(() => FRUITS.filter(item => item.price <= maxPrice), [maxPrice])
		  return(
			<div>
			  <Select
				options={fruits}
				selected={selectFruit}
				onChange={onChange}
			  />
			</div>
		  )
		}

		const FRUITS = [
					{ name: 'apple', price: 500 },
					{ name: 'banana', price: 1000 },
					{ name: 'orange', price: 1500 },
		];
		useMemo 훅을 이용하면 필요할 때만 fruits 값이 변경되도록 할 수 있다. useMemo 안에서 사용되는 속성값이나 상태값을 의존성 배열에 입력을 하면 된다.
		** useMemo나 useCallback, React.memo같은 것은 미리 성능을 걱정해서 사용하는 것은 추천하지 않는다.
		성능을 최적화하는 코드는 가독성이 안좋고 유지보수비용도 증가하기 때문. 성능 이슈가 발생했을때 해당하는 부분의 코드만 최적화 하는 것을 추천한다.

		- 값이 변경되어야 하는데 변경되지 않아서 문제가 되는 경우
		function SelectFruit({ selectedFruit, onChange }) {
			const [fruits, setFruits] = useState(['apple', 'banana', 'orange']);
			const [newFruit, setNewFruit] = useState('');
			function addNewFruit() {
				fruits.push(newFruit);
				setNewFruit('');
			}
			//...
			return(
			  <div>
				<Select option={fruits} selected={selectedFruit} onChange={onChange} />
				<input
					type="text"
					value={newFruit}
					onChange={e => setNewFruit(e.target.value)}
				/>
				<button onClick={addNewFruit}>추가하기</button>
			  </div>
			)

		}
		1. 상태 값은 직접 변경하면 안되고, setFruits([...fruits, newFruit]) 로 변경해야 한다.

가상돔과 실제돔 사이에서 성능을 최적화하는 방법
	export default function App() {
	  const [flag, setFlage] = useState(false);
	  useEffect(() => {
		setTimeout(() => setFlage((prev) => !prev), 1000);
	  });
	  if (flag) {
		return (
		  <div>
			<Counter />
			<p>사과</p>
			<p>바나나</p>
		  </div>
		);
	  } else {
		return (
		  <span>
			<Counter />
			<p>사과</p>
			<p>바나나</p>
		  </span>
		);
	  }
	}

	function Counter() {
	  const [count, setCount] = useState(0);
	  useEffect(() => {
		const id = setTimeout(() => setCount((prev) => prev + 1), 100);
		return () => clearTimeout(id);
	  });
	  return <p>count: {count}</p>;
	}
	1. flag라는 상태값이 있고 flag에 따라서 렌더링이되고 있는데 children부분은 같고 부모의 태그가 다른 상태.
	   이렇게 요소의 타입을 변경하면 해당 요소의 모든 자식 요소도 같이 변경된다.
	   자식요소가 컴포넌트라면 해당 컴포넌트는 언마운트되고 다시 마운트가 된다. 그러면서 상태값도 초기화가 된다.
	   그리고 자식요소가 돔요소라면 이 돔 요소가 실제 돔에서 삭제되고 다시 추가된다.
	   따라서 자식요소가 많은 요소의 타입을 변경하면 화면이 끊기는 느낌이 들 수 있다.
	2. 요소의 타입을 변경하는게 아니라 속성값만 변경했을 때는 해당하는 속성만 수정된다. 즉 요소가 삭제되거나 추가되지는 않는다.
	   자식 컴포넌트도 영향이 없다.
	3. 일반적으로 새로운 요소를 추가하거나 삭제하면 해당 요소만 실제 돔에 추가 또는 삭제를 하고 기존 요소는 건드리지 않는다.
	   리액트는 중간에 요소를 추가하면 그 뒤에 있는 요소가 변경되지 않았다는 것을 알지 못한다. 리액트는 효율적인 연산을 위해
	   순서 정보를 이용한다. 이때 key 속성 값을 이용하면 중간에 요소를 추가할 때 해당 요소만 추가할 수 있게 된다.
```

## 32강 리덕스 소개

```
  리덕스 장점
    · 컴포넌트 코드로부터 상태 관리 코드를 분리할 수 있다.
	· 미들웨어를 활용한 다양한 기능 추가
	  - 강력한 미들웨어 라이브러리(ex. redux-saga)
	  - 로컬 스토리지에 데이터 저장하기 및 불러오기
	· SSR 시 데이터 전달이 간편
	· 리액트 콘텍스트보다 효율적인 렌더링 기능
```

## 33강 액션, 미들웨어

```
		액션 -> 미들웨어 -> 리듀서 -> 스토어
		 ↑-------- 뷰   <---------|
```

## 34강 리듀서, 스토어

```
 리듀서: 액션이 발생했을때 새로운 상태값을 만드는 함수
 immer

 function reducer(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch(action.type) {
			case ADD:
			  draft.todos.push(action.todo);
			  break;
			case REMOVE_ALL:
			  draft.todos = [];
			  break;
		    case REMOVE:
			  draft.todos = draft.todos.filter(todo => todo.id !== action.id);
			  break;
			default:
			  break
		}
	});
 }

 const reducer = createReducer(INITIAL_STATE), {
	 [ADD]: (state, action) => state.todos.push(action.todo),
	 [REMOVE_ALL]: state => (state.todos = []),
	 [REMOVE]: (state, action) => (state.todos = state.todos.filter(todo => todo.id !== action.id)),
 });

 function createReducer(initialState, handlerMap) {
	 return function (state = initialState, action) {
		 return produce(state, draft => {
			 const handler = handlerMap[action.type];
			 if (handler) {
				 handler(draft,action);
			 }
		 });
	 };
 }

```

## 36강 react-redux 사용하기

```
커스텀 useSelector만들어 사용하기
function useMySelector(selector) {
	return useSelector(selector, shallowEqual);
}

function MyComponent() {
	const [value1, value2] = useMySelector(state => [state,value1, state.value2]);
	const value3 = useMySelector(state => state.value3);
	const [value4] = useMySelector(state => [state.value4]);
}
커스텀 훅useSelector 사용할때는 한개만 반환하더라도 배열로 만들어 반환하는 것이 좋다. 왜냐하면 모든 값을 다비교 해버리기 때문에
```

## 39강 redux-saga를 이용한 비동기 액션 처리1

```
  순서
  timeline state/index.js -> view -> saga.js -> store.js


  리덕스에서 액션이 발생한 이후에 비동기 처리를 통해서 상태값을 변경하고 싶은 경우가 있다. 대표적으로 서버에서 데이터를 가져오는 경우가 있다.
  이때 3가지 라이브러리가 많이 쓰인다.
  redux-thunk
    - 비동기 로직이 간단할 때 사용
	- 가장 간단하게 시작 할 수 있다.
  redux-observable
    - 비동기 코드가 많을 때 사용
	- RxJS 패키지를 기반으로 만들어졌다.
	  - 리액티브 프로그래밍을 공부해야 하므로 진입 장벽이 가장 높다
  redux-saga
    - 비동기 코드가 많을 때 사용
	- 제너레이터를 적극적으로 활용한다.
	- 테스트 코드 작성이 쉽다.

  export function* fetchData(action) {
    yield put(actions.setLoading(true));
    yield put(actions.addLike(action.timeline.id, 1));
    yield call(callApiLike);
    yield put(actions.setLoading(false));
  }

  export default function* () {
    yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
  }
  1. 여기서 all 과 takeLeading 이라는 것은 redux-saga에서 제공하는 함수이다.
	 all 안에는 배열이 있는데 이 배열 안에서 원하는 것들을 여러 개를 나열을할 수 있다.
     예상으로는 서버로 보내는 로직 모음
  2. put, call, all 이런 것들은 모두 사가에서 부수효과(effects)라고 부른다.
	const a = take(types.REQUEST_LIKE);
	const b = put(actions.setLoading(false));
	const c = call(callApiLike);
	console.log({a,b,c});
	const logResult = {
	  a: {
		TAKE: {
		  pattern: 'timeline/REQUEST_LIKE'
		},
	  },
	  b: {
		PUT: {
		  channel: null,
		  action: {
			type: 'timeline/SET_LOADING',
			isLoading: false,
		  },
		},
	  },
	  c: {
		CALL: {
		  context: null,
		  fn: callApiLike,
		  args: [],
		},
	  },
	};
	3. put,call,take가 반환하는 값들은 객체이다. 이처럼 redux-saga의 부수효과 함수는 해야할 일을 설명하는
	   자바스크립트 객체를 반환한다. 이렇게 반환된 객체는 yield를 호출했을때 사가 미들웨어에게 전달이 됩니다.
	   리덕스의 미들웨어쪽에서 사가 미들웨어가 돌아가고 있다.
	    사가 미들웨어는 부수효과 객체가 설명하는 일을 한 다음에 그 결과와 함께 실행 흐름을 다시 제너레이터 쪽으로 넘겨준다.
```

## 40강 제너레이터 이해하기

```
	function* f1() {
		yield 10;
		yield 20;
		return 'finished';
	}
	const gen = f1()

	1. f1은 제너레이터 함수이다. 이렇게 *를 입력해서 제너레이터 함수로 만들수 있다.
	2. 제너레이터 함수를 호출하면 제너레이터 객체가 반환된다.

    iterator 와 iterable
	다음 조건을 만족하는 객체는 반복자(iterator)이다.
	  - next 메서드를 갖고 있다.
	  - next 메서드는 value와 done 속성값을 가진 객체를 반환한다.
	  - done 속성값은 작업이 끝났을 때 참이 된다.

	다음 조건을 만족하면 반복 가능(iterable)한 객체다.
	  - Symbol.iterator 속성값으로 함수를 갖고 있다.
	  - 해당 함수를 호출하면 반복자(iterator)를 반환한다.

	제너레이터 객체는 특이하게도 iterator 이면서 iterable 이다
	배열도 iterable이다
	iterable을 만족하면 자바스크립트의 몇가지 기능을 사용 할 수 있다.
	  - for of 라는 것을 사용 할 수 있다.
	전개 연산자 오른쪽에 iterable을 넣을 수 있다.
```

## 41강 redux-saga를 이용한 비동기 액션 처리2

```
  이전에는 사가 함수가 하나의 액션만 처리하는 것을 보여 줬었다.
  여기서는 하나의 사가 함수가 두개의 액션을 처리 할 수 있다는 것을 보여주기 위함이다.
  function* loginFlow() {
	  while(true) {
		  const { id, password } = yield take(types.LOGIN);
		  const userInfo = yield call(callApiLogin, id, password);
		  yield put(types.SET_USER_INFO, userInfo);
		  yield take(types.LOGOUT);
		  yield call(callApiLogout, id);
		  yield put(types.SET_USER_INFO, null);
	  }
  }
  1. take라는 effect는 매개변수로 입력한 액션을 기다린다. 그래서 로그인 액션이 발생하면 액션 객체가 반환이 된다.
  2. 그 후 필요한 처리를 하고 yield take(types.LOGOUT) 에서 로그아웃 액션을 기다린다.
  3. 로그아웃 액션이 발생하면 필요한 처리를 하고 다시 const { id, password } = yield take(types.LOGIN) 여기서
     로그인을 기다릴 수 있다.

  사가 함수에서 예외처리하는 방법
  export function callApiLike() {
	  return new Promise((resolve, reject) => {
		  setTimeout(() => {
			  if (Math.random() * 10 < 5) {
				  resolve();
			  } else {
				  reject('callApiLike 실패');
			  }
		  }, 1000);
	  });
  }
  '50%의 확률로 예외가 발생할 수 있는 상황'

  error 액션 만들고 saga.js에서 try catch추가

  디바운스 기능
    1. 짧은 시간에 같은 이벤트가 반복해서 발생할 때 모든 이벤트를 처리하기 부담스러울 수 있는데 이때 디바운스를 사용하면 좋다.
	2. 디바운스란 같은 함수가 연속해서 호출될 때 첫 번째 또는 마지막 호출만 실행하는 기능을 말한다.
	   redux-saga에서는 debounce 부수효과 함수를 제공한다.

  테스트
  yarn add @redux-saga/testing-utils
```
