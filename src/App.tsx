// ============================================
// Tailwind CSS 실습 프로젝트
// ============================================
// 이 프로젝트는 Tailwind CSS를 사용하여 웹페이지를 꾸미는 실습입니다.
// 아래에 있는 미션들을 하나씩 완성해보세요!
// ============================================

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ============================================
          미션 1: 헤더 배경색 바꾸기
          ============================================
          현재 헤더는 bg-blue-500입니다.
          다른 색상으로 바꿔보세요!
          예: bg-red-500, bg-green-500, bg-purple-500 등
      */}
      <header className="bg-blue-500 text-white py-4 px-6">
        <h1 className="text-3xl font-bold">나의 웹사이트</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* ============================================
            미션 2: 버튼 스타일 바꾸기
            ============================================
            버튼의 색상, 크기, 모서리를 바꿔보세요!
            - 색상: bg-blue-500 → bg-red-500, bg-green-500 등
            - 크기: py-2 px-4 → py-3 px-6 등
            - 모서리: rounded → rounded-full, rounded-lg 등
        */}
        <div className="mb-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            클릭하세요!
          </button>
        </div>

        {/* ============================================
            미션 3: 카드에 그림자 효과 추가하기
            ============================================
            카드에 shadow 효과를 추가해보세요!
            - shadow-md → shadow-lg, shadow-xl 등
            - 또는 shadow-2xl로 더 강한 그림자 만들기
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-2">카드 1</h2>
            <p className="text-gray-600">첫 번째 카드입니다.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-2">카드 2</h2>
            <p className="text-gray-600">두 번째 카드입니다.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-2">카드 3</h2>
            <p className="text-gray-600">세 번째 카드입니다.</p>
          </div>
        </div>

        {/* ============================================
            미션 4: 텍스트 정렬 바꾸기
            ============================================
            아래 텍스트의 정렬을 바꿔보세요!
            - text-center → text-left, text-right
            - 또는 text-justify로 양쪽 정렬
        */}
        <div className="bg-white p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">소개</h2>
          <p className="text-gray-700 text-center">
            이것은 Tailwind CSS 실습을 위한 텍스트입니다.
            여러분의 창의력으로 이 페이지를 꾸며보세요!
          </p>
        </div>

        {/* ============================================
            미션 5: 배경색과 텍스트 색상 바꾸기
            ============================================
            아래 섹션의 배경색과 텍스트 색상을 바꿔보세요!
            - bg-gray-100 → bg-pink-100, bg-yellow-100 등
            - text-gray-800 → text-blue-800, text-red-800 등
        */}
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">자유 실습</h2>
          <p className="text-gray-800 mb-4">
            이 섹션은 여러분이 자유롭게 꾸밀 수 있는 공간입니다.
            Tailwind CSS의 다양한 클래스를 사용해보세요!
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>색상 변경 (bg-*, text-*)</li>
            <li>간격 조정 (p-*, m-*, gap-*)</li>
            <li>폰트 스타일 (font-bold, italic, underline)</li>
            <li>레이아웃 (flex, grid, hidden)</li>
          </ul>
        </div>
      </main>

      {/* ============================================
          미션 6: 푸터 스타일 바꾸기
          ============================================
          푸터의 배경색과 텍스트 색상을 바꿔보세요!
          예: bg-gray-800 → bg-indigo-900, text-white → text-yellow-200 등
      */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p>© 2025 Tailwind CSS 실습 프로젝트</p>
      </footer>
    </div>
  );
}

