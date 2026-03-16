**BỘ GIÁO DỤC VÀ ĐÀO TẠO**

**TRƯỜNG ĐẠI HỌC TÂY ĐÔ**

**KHOA KỸ THUẬT - CÔNG NGHỆ**

**TIỂU LUẬN**

**HỆ THỐNG HỖ TRỢ GIÁM SÁT VÀ ĐIỀU HÀNH BÁN HÀNG BẰNG TÁC TỬ AI CHO MÔI TRƯỜNG THƯƠNG MẠI ĐIỆN TỬ NỘI BỘ**

**CHUYÊN NGÀNH: CÔNG NGHỆ THÔNG TIN**

**SINH VIÊN THỰC HIỆN: QUÁCH TRƯỜNG PHÚC - 227060168**

**GIẢNG VIÊN HƯỚNG DẪN: THS. NGUYỄN CHÍ CƯỜNG**

# MỤC LỤC

1. [CHƯƠNG I. MỞ ĐẦU](#chương-i.-mở-đầu)
2. [CHƯƠNG II. CƠ SỞ LÝ THUYẾT](#chương-ii.-cơ-sở-lý-thuyết)
3. [CHƯƠNG III. PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG](#chương-iii.-phân-tích-và-thiết-kế-hệ-thống)
4. [CHƯƠNG IV. KẾT QUẢ DỰ KIẾN VÀ ĐỊNH HƯỚNG TRIỂN KHAI](#chương-iv.-kết-quả-dự-kiến-và-định-hướng-triển-khai)
5. [KẾT LUẬN - ĐÁNH GIÁ](#kết-luận---đánh-giá)
6. [TÀI LIỆU THAM KHẢO](#tài-liệu-tham-khảo)

# CHƯƠNG I. MỞ ĐẦU

## 1.1. Đặt vấn đề

Trong bối cảnh chuyển đổi số, nhiều đơn vị kinh doanh đang đứng trước nhu cầu phải theo dõi doanh thu, đơn hàng, tồn kho và hiệu quả khuyến mãi với tốc độ ngày càng cao. Tuy nhiên, ở nhiều môi trường vận hành thực tế, dữ liệu thường bị phân tán ở nhiều màn hình, nhiều báo cáo hoặc nhiều quy trình xử lý khác nhau, khiến cho nhân sự vận hành phải mất nhiều thời gian quan sát, tổng hợp và ra quyết định. Điều này làm giảm hiệu quả khai thác dữ liệu, đồng thời tạo ra nguy cơ chậm trễ khi cần xử lý các tình huống như hàng sắp hết, đơn hàng tồn đọng hoặc chương trình khuyến mãi hoạt động kém hiệu quả.

Song song đó, sự phát triển của trí tuệ nhân tạo tạo sinh và các tác tử AI đã mở ra một hướng tiếp cận mới cho các hệ thống quản trị. Thay vì chỉ cung cấp bảng điều khiển tĩnh hoặc các bộ lọc dữ liệu truyền thống, hệ thống có thể cho phép người dùng đặt câu hỏi bằng ngôn ngữ tự nhiên, yêu cầu AI tóm tắt số liệu hoặc hỗ trợ chuẩn bị một số thao tác nghiệp vụ. Tuy nhiên, nếu tích hợp AI theo cách đơn giản như một khung trò chuyện độc lập thì giá trị mang lại còn hạn chế, vì AI chưa thực sự gắn vào quy trình vận hành của hệ thống.

Từ thực tế đó, đề tài lựa chọn hướng xây dựng một hệ thống hỗ trợ giám sát và điều hành bán hàng trong môi trường thương mại điện tử nội bộ, triển khai dưới dạng ứng dụng web và có tích hợp tác tử AI. Điểm nhấn của đề tài nằm ở việc tổ chức lớp tương tác giữa người dùng và tác tử AI theo hướng có trạng thái, có sự kiện, có khả năng gọi công cụ và có bước xác nhận của con người trước khi thực hiện các thao tác quan trọng. Hướng tiếp cận này giúp hệ thống vừa giữ được tính thực tiễn trong quản trị bán hàng, vừa thể hiện được giá trị ứng dụng của AI trong môi trường nghiệp vụ cụ thể.

## 1.2. Mục tiêu cần đạt được

Đề tài hướng đến các mục tiêu chính sau đây:

- Xây dựng một hệ thống web hỗ trợ giám sát hoạt động bán hàng nội bộ thông qua dashboard tổng hợp.
- Cho phép người dùng khai thác dữ liệu bằng ngôn ngữ tự nhiên thông qua giao diện tương tác với tác tử AI.
- Hỗ trợ một số thao tác nghiệp vụ có kiểm soát như tạo mã giảm giá và cập nhật tồn kho thông qua quy trình xem trước và xác nhận.
- Đảm bảo tính minh bạch và truy vết bằng cơ chế lưu lịch sử thao tác và trạng thái xử lý.
- Đề xuất một mô hình triển khai phù hợp với phạm vi học phần tiểu luận nhưng vẫn có khả năng mở rộng trong tương lai.

## 1.3. Phạm vi nghiên cứu

### 1.3.1. Đối tượng sử dụng

Đề tài tập trung vào hai nhóm người dùng chính là nhân sự vận hành và quản trị viên. Nhân sự vận hành là người trực tiếp theo dõi dữ liệu kinh doanh, quản lý sản phẩm, đơn hàng, tồn kho và chương trình khuyến mãi. Quản trị viên là người có phạm vi kiểm soát cao hơn, có thể giám sát toàn hệ thống, quản lý tài khoản và phê duyệt các thao tác quan trọng.

### 1.3.2. Phạm vi chức năng

Các chức năng cốt lõi được lựa chọn gồm:

- Đăng nhập và phân quyền người dùng.
- Xem dashboard tổng hợp với các chỉ số doanh thu, đơn hàng, tồn kho và khuyến mãi.
- Xem và quản lý sản phẩm.
- Xem và quản lý đơn hàng.
- Truy vấn dữ liệu bằng giao diện AG-UI.
- Tạo mã giảm giá bằng tác tử AI theo cơ chế xem trước và xác nhận.
- Cập nhật tồn kho bằng tác tử AI theo cơ chế xem trước và xác nhận.
- Xem lịch sử thao tác và giám sát toàn hệ thống.
- Phê duyệt hoặc xác nhận thao tác quan trọng ở mức quản trị viên.

### 1.3.3. Phạm vi công nghệ

Đề tài nghiên cứu mô hình ứng dụng web theo kiến trúc client-server. Phần giao diện dự kiến sử dụng React và TypeScript. Phần máy chủ dự kiến sử dụng Node.js và Express để xử lý nghiệp vụ, xác thực và cung cấp API. Cơ sở dữ liệu dự kiến sử dụng PostgreSQL kết hợp Prisma ORM. Phần AI được tích hợp thông qua mô hình gọi API tương thích chuẩn OpenAI, kết hợp cơ chế function calling và kiểm tra dữ liệu đầu vào bằng Zod. Để tổ chức giao diện tác tử phía người dùng, có thể tích hợp CopilotKit như một lớp hỗ trợ xây dựng agentic UI.

### 1.3.4. Phạm vi triển khai

Đề tài chỉ tập trung vào bối cảnh vận hành nội bộ, không triển khai đầy đủ các chức năng của một sàn thương mại điện tử công khai dành cho người mua và người bán bên ngoài. Việc giới hạn phạm vi theo hướng này nhằm đảm bảo tính khả thi trong thời gian thực hiện, đồng thời vẫn giữ được giá trị chuyên môn của đề tài.

## 1.4. Phương pháp nghiên cứu

Đề tài được thực hiện theo các phương pháp sau:

- **Nghiên cứu tài liệu:** Tìm hiểu các mô hình dashboard quản trị, các nguyên tắc thiết kế hệ thống web, tài liệu về AG-UI, CopilotKit và kiến trúc tác tử AI.
- **Phân tích yêu cầu:** Xác định actor, use-case, dữ liệu chính và phạm vi nghiệp vụ của hệ thống.
- **Thiết kế hệ thống:** Xây dựng mô hình kiến trúc, mô hình dữ liệu và quy trình tương tác giữa người dùng với tác tử AI.
- **Đánh giá giải pháp:** Xem xét khả năng đáp ứng của hệ thống đối với nhu cầu giám sát, điều hành và kiểm soát thao tác quan trọng.

## 1.5. Hướng giải quyết

Hướng giải quyết của đề tài là kết hợp dashboard quản trị truyền thống với giao diện tương tác tác tử AI theo mô hình AG-UI. Trong cách tiếp cận này, AI không bị tách rời khỏi hệ thống mà trở thành một thành phần cùng tham gia vào luồng làm việc của người dùng. Tác tử AI không chỉ trả lời bằng văn bản mà còn có thể phát sinh các sự kiện về trạng thái xử lý, lời gọi công cụ, kết quả thao tác hoặc yêu cầu xác nhận. Điều này giúp hệ thống phản ánh tiến trình xử lý theo thời gian thực, đồng thời giữ được khả năng kiểm soát của con người đối với các thao tác có ảnh hưởng đến dữ liệu nghiệp vụ.

## 1.6. Kế hoạch thực hiện

Kế hoạch thực hiện có thể chia thành các giai đoạn chính như sau:

- Giai đoạn 1: Khảo sát tài liệu, xác định đề tài, phạm vi và hướng triển khai.
- Giai đoạn 2: Phân tích yêu cầu, actor, use-case và mô hình dữ liệu.
- Giai đoạn 3: Thiết kế kiến trúc hệ thống và luồng tương tác tác tử AI.
- Giai đoạn 4: Hiện thực hóa các chức năng cốt lõi của hệ thống.
- Giai đoạn 5: Kiểm thử, đánh giá và hoàn thiện báo cáo.

# CHƯƠNG II. CƠ SỞ LÝ THUYẾT

## 2.1. Dashboard quản trị trong thương mại điện tử

Dashboard quản trị là thành phần trung tâm giúp người vận hành theo dõi các chỉ số quan trọng như doanh thu, số lượng đơn hàng, tình trạng tồn kho và hiệu quả chương trình khuyến mãi. Trong môi trường thương mại điện tử, dashboard không chỉ đóng vai trò hiển thị số liệu mà còn là nơi hỗ trợ nhận diện vấn đề và đưa ra quyết định nhanh chóng. Một dashboard hiệu quả cần đảm bảo các tiêu chí trực quan, dễ hiểu, phản ánh đúng dữ liệu và hỗ trợ lọc theo thời gian hoặc theo nhóm dữ liệu.

## 2.2. Tác tử AI và vai trò trong hệ thống nghiệp vụ

Tác tử AI có thể được hiểu là một thành phần phần mềm có khả năng tiếp nhận yêu cầu, phân tích ngữ cảnh, lập kế hoạch xử lý ở mức nhất định, gọi công cụ cần thiết và trả lại kết quả cho người dùng. Khác với chatbot truyền thống chỉ dừng ở trao đổi văn bản, tác tử AI có thể tham gia sâu hơn vào quy trình nghiệp vụ khi được cấp quyền truy cập vào dữ liệu và công cụ phù hợp. Tuy nhiên, trong môi trường doanh nghiệp hoặc môi trường quản trị nội bộ, việc tích hợp tác tử AI cần đi kèm các cơ chế an toàn, minh bạch và kiểm soát của con người.

## 2.3. AG-UI (Agent - User Interaction)

AG-UI là tư tưởng tổ chức tương tác giữa người dùng và tác tử AI theo hướng có cấu trúc và dựa trên sự kiện. Thay vì để tác tử chỉ trả về một khối văn bản cuối cùng, AG-UI cho phép mô tả cả vòng đời xử lý của tác tử, bao gồm thời điểm bắt đầu, nội dung phản hồi từng phần, lời gọi công cụ, cập nhật trạng thái, lỗi phát sinh hoặc kết quả cuối cùng. Cách tiếp cận này đặc biệt phù hợp với các hệ thống có yêu cầu minh bạch và tương tác theo thời gian thực, vì nó giúp người dùng hiểu được hệ thống đang làm gì và đang xử lý đến đâu.

## 2.4. Human-in-the-loop trong hệ thống AI

Human-in-the-loop là nguyên tắc thiết kế trong đó con người vẫn giữ vai trò kiểm soát đối với các quyết định hoặc hành động quan trọng của hệ thống AI. Trong đề tài này, nguyên tắc đó được thể hiện qua cơ chế xem trước và xác nhận trước khi thực hiện các thao tác ghi dữ liệu như tạo mã giảm giá hoặc cập nhật tồn kho. Cách tổ chức này giúp giảm rủi ro sai lệch, tăng độ tin cậy và làm cho hệ thống phù hợp hơn với môi trường quản trị thực tế.

## 2.5. Công nghệ dự kiến sử dụng

### 2.5.1. React và TypeScript

React hỗ trợ xây dựng giao diện theo hướng thành phần, phù hợp với các dashboard có nhiều khu vực hiển thị dữ liệu, biểu đồ và thành phần tương tác. TypeScript giúp kiểm soát kiểu dữ liệu tốt hơn, từ đó hỗ trợ giảm lỗi khi xây dựng các luồng xử lý phức tạp.

### 2.5.2. Node.js và Express

Node.js và Express phù hợp để xây dựng lớp máy chủ cho hệ thống web, hỗ trợ phát triển API, xác thực người dùng, xử lý logic nghiệp vụ và kết nối với cơ sở dữ liệu. Đây cũng là môi trường thuận lợi để tích hợp thêm các thành phần AI và các công cụ xử lý dữ liệu.

### 2.5.3. PostgreSQL và Prisma ORM

PostgreSQL là hệ quản trị cơ sở dữ liệu quan hệ phổ biến, phù hợp với các hệ thống cần đảm bảo tính nhất quán dữ liệu. Prisma ORM giúp thao tác dữ liệu theo hướng hiện đại, dễ mở rộng và giảm độ phức tạp khi làm việc với mô hình dữ liệu.

### 2.5.4. CopilotKit và lớp giao diện tác tử

CopilotKit là một framework hỗ trợ xây dựng giao diện tương tác với AI ở phía người dùng. Trong đề tài này, công cụ này được xem như một lớp hỗ trợ hiện thực giao diện tác tử, giúp tổ chức tốt hơn luồng phản hồi, trạng thái và thành phần hiển thị liên quan đến AI.

# CHƯƠNG III. PHÂN TÍCH VÀ THIẾT KẾ HỆ THỐNG

## 3.1. Xác định actor

Hệ thống bao gồm ba nhóm actor chính:

- **Khách truy cập (Guest):** Người chưa đăng nhập, có thể xem thông tin giới thiệu và sử dụng chức năng đăng nhập.
- **Nhân sự vận hành (Operator):** Người trực tiếp sử dụng hệ thống để theo dõi dữ liệu, quản lý sản phẩm, đơn hàng, tồn kho, khuyến mãi và tương tác với tác tử AI.
- **Quản trị viên (Admin):** Người có quyền cao hơn Operator, có khả năng quản lý tài khoản, phân quyền, giám sát toàn hệ thống và phê duyệt các thao tác quan trọng.

## 3.2. Xác định các chức năng chính

Các chức năng chính của hệ thống bao gồm:

- Đăng nhập hệ thống.
- Xem dashboard tổng hợp.
- Quản lý sản phẩm.
- Quản lý đơn hàng.
- Truy vấn dữ liệu bằng giao diện AG-UI.
- Tạo mã giảm giá bằng giao diện AG-UI.
- Cập nhật tồn kho bằng giao diện AG-UI.
- Xem lịch sử thao tác.
- Quản lý tài khoản người dùng.
- Phân quyền người dùng.
- Phê duyệt hoặc xác nhận thao tác quan trọng.

## 3.3. Mô hình dữ liệu chính

Để đáp ứng yêu cầu nghiệp vụ, hệ thống cần quản lý các nhóm dữ liệu cơ bản sau:

- **Người dùng:** Lưu thông tin tài khoản, mật khẩu đã mã hóa, vai trò, trạng thái hoạt động.
- **Sản phẩm:** Lưu mã sản phẩm, tên sản phẩm, giá bán, số lượng tồn, trạng thái kinh doanh, danh mục.
- **Đơn hàng:** Lưu mã đơn, khách hàng, danh sách sản phẩm, tổng giá trị, trạng thái xử lý, thời gian tạo.
- **Khuyến mãi và mã giảm giá:** Lưu thông tin chương trình, mức giảm, điều kiện áp dụng, thời gian hiệu lực, trạng thái hoạt động.
- **Nhật ký thao tác:** Lưu người thực hiện, thời điểm thao tác, dữ liệu liên quan, trạng thái xác nhận và kết quả xử lý.

## 3.4. Kiến trúc tổng thể của hệ thống

Hệ thống được xây dựng theo mô hình client-server với các lớp chính như sau:

- **Lớp giao diện người dùng:** Hiển thị dashboard, bảng dữ liệu, biểu đồ và giao diện tương tác với tác tử AI.
- **Lớp API và nghiệp vụ:** Xử lý xác thực, phân quyền, truy xuất dữ liệu và các thao tác nghiệp vụ.
- **Lớp tác tử AI:** Phân tích yêu cầu ngôn ngữ tự nhiên, quyết định gọi công cụ, tổng hợp phản hồi và phát sinh các sự kiện cần thiết.
- **Lớp cơ sở dữ liệu:** Lưu trữ toàn bộ dữ liệu vận hành và nhật ký thao tác.

## 3.5. Luồng tương tác giữa người dùng và tác tử AI

Quá trình tương tác giữa người dùng và tác tử AI được tổ chức theo các bước cơ bản:

1. Người dùng nhập câu hỏi hoặc yêu cầu thao tác trên giao diện.
2. Giao diện gửi yêu cầu đến lớp tác tử AI.
3. Tác tử AI phân tích ý định và quyết định công cụ cần gọi.
4. Hệ thống thực hiện truy vấn hoặc chuẩn bị dữ liệu xem trước.
5. Kết quả được trả về giao diện theo các sự kiện như bắt đầu xử lý, đang gọi công cụ, phản hồi từng phần hoặc hoàn tất.
6. Nếu là thao tác ghi dữ liệu, hệ thống yêu cầu người dùng hoặc quản trị viên xác nhận trước khi thực thi.

## 3.6. Nguyên tắc an toàn và kiểm soát

Đề tài xác định ba nguyên tắc quan trọng trong quá trình tích hợp AI:

- **Giới hạn phạm vi tác vụ:** Chỉ cho phép tác tử thực hiện các thao tác nằm trong phạm vi được định nghĩa trước.
- **Bắt buộc xem trước và xác nhận:** Không cho phép AI tự ý ghi dữ liệu đối với các thao tác quan trọng.
- **Lưu vết đầy đủ:** Mọi thao tác quan trọng phải được ghi vào lịch sử để phục vụ việc kiểm tra và đối chiếu sau này.

# CHƯƠNG IV. KẾT QUẢ DỰ KIẾN VÀ ĐỊNH HƯỚNG TRIỂN KHAI

## 4.1. Kết quả dự kiến

Sau khi hoàn thành, đề tài dự kiến đạt được các kết quả chính như sau:

- Có một mô hình hệ thống rõ ràng cho bài toán giám sát và điều hành bán hàng nội bộ.
- Có tài liệu mô tả hệ thống, tài liệu phân tích actor và use-case, cùng báo cáo trình bày cơ sở lý thuyết và hướng thiết kế.
- Xác định được cách tích hợp tác tử AI vào dashboard quản trị theo hướng có kiểm soát.
- Chứng minh được tính khả thi của mô hình AG-UI trong môi trường nghiệp vụ cụ thể.

## 4.2. Giá trị thực tiễn của đề tài

Đề tài có giá trị thực tiễn ở chỗ giải quyết được bài toán theo dõi số liệu và điều hành nghiệp vụ trong môi trường thương mại điện tử nội bộ. Thay vì chỉ xây dựng một giao diện dashboard tĩnh, đề tài đề xuất một mô hình cộng tác giữa người vận hành và tác tử AI, trong đó AI hỗ trợ rút ngắn thời gian khai thác dữ liệu, còn con người giữ vai trò kiểm soát đối với các quyết định quan trọng.

## 4.3. Hướng mở rộng trong tương lai

Nếu tiếp tục phát triển, hệ thống có thể mở rộng theo các hướng sau:

- Bổ sung thêm nhiều công cụ AI để hỗ trợ dự báo doanh thu, phát hiện bất thường và gợi ý khuyến mãi.
- Mở rộng cơ chế phê duyệt nhiều cấp đối với các thao tác ảnh hưởng lớn đến nghiệp vụ.
- Kết nối với các nền tảng bán hàng hoặc kho vận bên ngoài để lấy dữ liệu tự động.
- Hoàn thiện phần giao diện trực quan và các báo cáo phân tích theo chuyên đề.

# KẾT LUẬN - ĐÁNH GIÁ

Đề tài “Hệ thống hỗ trợ giám sát và điều hành bán hàng bằng tác tử AI cho môi trường thương mại điện tử nội bộ” là một hướng nghiên cứu và triển khai có tính thực tiễn, phù hợp với xu hướng ứng dụng AI trong các hệ thống quản trị hiện nay. Bằng cách kết hợp dashboard quản trị với lớp tương tác tác tử theo mô hình AG-UI, đề tài không chỉ dừng ở việc bổ sung một công cụ hội thoại, mà còn hướng đến việc tổ chức lại trải nghiệm làm việc giữa con người và AI theo cách minh bạch, có kiểm soát và có khả năng hỗ trợ nghiệp vụ thực tế.

Phạm vi đề tài được xác định ở mức vừa đủ để phù hợp với học phần tiểu luận nhưng vẫn thể hiện được nhiều khía cạnh quan trọng như phân tích yêu cầu, thiết kế hệ thống, quản trị dữ liệu và tích hợp AI. Nếu tiếp tục được phát triển, đề tài có khả năng trở thành nền tảng cho một sản phẩm hoàn chỉnh hơn phục vụ nhu cầu vận hành bán hàng trong doanh nghiệp.

# TÀI LIỆU THAM KHẢO

[1] AG-UI Documentation, “Introduction”. Truy cập từ: https://docs.ag-ui.com/introduction

[2] AG-UI Documentation, “Architecture”. Truy cập từ: https://docs.ag-ui.com/concepts/architecture

[3] AG-UI Documentation, “Events”. Truy cập từ: https://docs.ag-ui.com/concepts/events

[4] CopilotKit Documentation. Truy cập từ: https://docs.copilotkit.ai/

[5] CopilotKit Documentation, “Quickstart”. Truy cập từ: https://docs.copilotkit.ai/direct-to-llm/guides/quickstart

[6] CopilotKit Documentation, “CoAgents Overview”. Truy cập từ: https://docs.copilotkit.ai/coagents/overview

[7] Tài liệu tham khảo nội bộ: Copy of Presentation - AI AGENT ARCHITECTURE.pdf

[8] Tài liệu tham khảo nội bộ: Bản sao của Software architecture design.pdf

[9] Tài liệu tham khảo nội bộ: Software architecture.pdf
