// Languages. The game is written in English; this translates what's on screen as it changes.
// A few languages are built in (hand-written, work offline). Every other language is machine
// translated: by the browser's own on-device translator where there is one, otherwise by Google
// Translate over the internet. Translations are cached, so each line is only translated once.

const STORE_KEY = "cc3d_lang";
const CACHE_KEY = "cc3d_tr_";

/** Hand-written translations: [English, Tiếng Việt, Español, Português, Français]. {x} matches any text. */
const BUILT_IN = ["vi", "es", "pt", "fr"];
/** Exported so `tools/check_i18n.mjs` can verify the table and the app shell's coverage. */
export const ROWS = [
  ["Saves", "Lưu trữ", "Partidas", "Salvamentos", "Sauvegardes"],
  ["Hall of Fame", "Đại sảnh Danh vọng", "Salón de la Fama", "Hall da Fama", "Panthéon"],
  ["Life", "Cuộc sống", "Vida", "Vida", "Vie"],
  ["Settings", "Cài đặt", "Ajustes", "Configurações", "Paramètres"],
  ["Install app", "Cài ứng dụng", "Instalar app", "Instalar app", "Installer l'app"],
  ["How to play", "Cách chơi", "Cómo jugar", "Como jogar", "Comment jouer"],
  ["Sound on", "Bật âm thanh", "Sonido activado", "Som ligado", "Son activé"],
  ["Sound off", "Tắt âm thanh", "Sonido desactivado", "Som desligado", "Son coupé"],
  ["Create your fighter", "Tạo võ sĩ của bạn", "Crea tu peleador", "Crie seu lutador", "Crée ton combattant"],
  ["Load a saved career", "Tải sự nghiệp đã lưu", "Cargar una carrera guardada", "Carregar uma carreira salva", "Charger une carrière"],
  ["Load a career", "Tải sự nghiệp", "Cargar una carrera", "Carregar uma carreira", "Charger une carrière"],
  ["Full name", "Họ và tên", "Nombre completo", "Nome completo", "Nom complet"],
  ["Nickname", "Biệt danh", "Apodo", "Apelido", "Surnom"],
  ["(optional)", "(không bắt buộc)", "(opcional)", "(opcional)", "(facultatif)"],
  ["Division", "Hạng đấu", "División", "Divisão", "Division"],
  ["Weight class", "Hạng cân", "Categoría de peso", "Categoria de peso", "Catégorie de poids"],
  ["Country", "Quốc gia", "País", "País", "Pays"],
  ["Fighting style", "Phong cách", "Estilo de pelea", "Estilo de luta", "Style de combat"],
  ["Striker", "Đấm đá", "Pegador", "Trocador", "Frappeur"],
  ["Wrestler", "Vật", "Luchador", "Wrestler", "Lutteur"],
  ["Jiu-Jitsu", "Nhu thuật", "Jiu-Jitsu", "Jiu-Jitsu", "Jiu-Jitsu"],
  ["Balanced", "Cân bằng", "Equilibrado", "Equilibrado", "Équilibré"],
  ["Heavy hands, fast feet. Weak off the back.", "Tay nặng, chân nhanh. Yếu khi nằm dưới.", "Manos pesadas, pies rápidos. Débil de espaldas.", "Mãos pesadas, pés rápidos. Fraco por baixo.", "Mains lourdes, pieds rapides. Faible au sol."],
  ["Takedowns and gas tank. Hands need work.", "Quật ngã và thể lực. Tay cần luyện thêm.", "Derribos y resistencia. Las manos necesitan trabajo.", "Quedas e fôlego. As mãos precisam de treino.", "Amenées au sol et cardio. Les poings sont à travailler."],
  ["Submission threat everywhere on the mat.", "Đe dọa khóa siết ở mọi vị trí.", "Amenaza de sumisión en todo el tapiz.", "Ameaça de finalização em todo o tatame.", "Menace de soumission partout au sol."],
  ["No holes, no superpowers.", "Không điểm yếu, không siêu năng lực.", "Sin huecos, sin superpoderes.", "Sem buracos, sem superpoderes.", "Pas de faille, pas de superpouvoir."],
  ["Look", "Ngoại hình", "Aspecto", "Aparência", "Apparence"],
  ["Randomize", "Ngẫu nhiên", "Aleatorio", "Aleatório", "Aléatoire"],
  ["Skin tone", "Màu da", "Tono de piel", "Tom de pele", "Teint"],
  ["Face", "Khuôn mặt", "Cara", "Rosto", "Visage"],
  ["Hair", "Tóc", "Pelo", "Cabelo", "Cheveux"],
  ["Hair color", "Màu tóc", "Color de pelo", "Cor do cabelo", "Couleur des cheveux"],
  ["Facial hair", "Râu", "Vello facial", "Barba", "Pilosité faciale"],
  ["Body type", "Dáng người", "Tipo de cuerpo", "Tipo de corpo", "Morphologie"],
  ["Abs", "Cơ bụng", "Abdominales", "Abdômen", "Abdos"],
  ["Fight shorts", "Quần đấu", "Pantalón de pelea", "Shorts de luta", "Short de combat"],
  ["Accessories", "Phụ kiện", "Accesorios", "Acessórios", "Accessoires"],
  ["Headband", "Băng đô", "Cinta", "Faixa", "Bandeau"],
  ["Feet", "Bàn chân", "Pies", "Pés", "Pieds"],
  ["Knees", "Đầu gối", "Rodillas", "Joelhos", "Genoux"],
  ["Tattoos", "Hình xăm", "Tatuajes", "Tatuagens", "Tatouages"],
  ["Chest", "Ngực", "Pecho", "Peito", "Torse"],
  ["Back", "Lưng", "Espalda", "Costas", "Dos"],
  ["Left arm", "Tay trái", "Brazo izquierdo", "Braço esquerdo", "Bras gauche"],
  ["Right arm", "Tay phải", "Brazo derecho", "Braço direito", "Bras droit"],
  ["Leg", "Chân", "Pierna", "Perna", "Jambe"],
  ["None", "Không", "Ninguno", "Nenhum", "Aucun"],
  ["Turn pro", "Lên chuyên nghiệp", "Hacerse profesional", "Virar profissional", "Passer pro"],
  ["Men's", "Nam", "Masculino", "Masculino", "Hommes"],
  ["Women's", "Nữ", "Femenino", "Feminino", "Femmes"],
  ["Year", "Năm", "Año", "Ano", "Année"],
  ["Week", "Tuần", "Semana", "Semana", "Semaine"],
  ["Age", "Tuổi", "Edad", "Idade", "Âge"],
  ["Cash", "Tiền", "Dinero", "Dinheiro", "Argent"],
  ["Fame", "Danh tiếng", "Fama", "Fama", "Célébrité"],
  ["Edit", "Chỉnh sửa", "Editar", "Editar", "Modifier"],
  ["Striking", "Đòn đánh", "Golpeo", "Trocação", "Frappe"],
  ["Power", "Sức mạnh", "Potencia", "Força", "Puissance"],
  ["Speed", "Tốc độ", "Velocidad", "Velocidade", "Vitesse"],
  ["Wrestling", "Vật", "Lucha", "Wrestling", "Lutte"],
  ["Grappling", "Địa chiến", "Grappling", "Grappling", "Grappling"],
  ["Cardio", "Thể lực", "Cardio", "Cardio", "Cardio"],
  ["Chin", "Khả năng chịu đòn", "Mentón", "Queixo", "Menton"],
  ["Fight offers", "Lời mời thi đấu", "Ofertas de pelea", "Ofertas de luta", "Offres de combat"],
  ["Accept fight", "Nhận trận", "Aceptar pelea", "Aceitar luta", "Accepter le combat"],
  ["Purse", "Tiền thưởng", "Bolsa", "Bolsa", "Bourse"],
  ["Favorite", "Cửa trên", "Favorito", "Favorito", "Favori"],
  ["Even", "Ngang tài", "Parejo", "Equilibrado", "Équilibré"],
  ["Underdog", "Cửa dưới", "No favorito", "Azarão", "Outsider"],
  ["Offers refresh every few weeks.", "Lời mời được làm mới sau vài tuần.", "Las ofertas se renuevan cada pocas semanas.", "As ofertas mudam a cada poucas semanas.", "Les offres changent toutes les quelques semaines."],
  ["This week", "Tuần này", "Esta semana", "Esta semana", "Cette semaine"],
  ["Energy", "Năng lượng", "Energía", "Energia", "Énergie"],
  ["Train", "Tập luyện", "Entrenar", "Treinar", "S'entraîner"],
  ["Spar", "Đấu tập", "Sparring", "Sparring", "Sparring"],
  ["Rest", "Nghỉ ngơi", "Descansar", "Descansar", "Repos"],
  ["Media", "Truyền thông", "Prensa", "Mídia", "Médias"],
  ["Teach classes", "Dạy lớp", "Dar clases", "Dar aulas", "Donner des cours"],
  ["Rival", "Đối thủ truyền kiếp", "Rival", "Rival", "Rival"],
  ["Heat", "Căng thẳng", "Tensión", "Tensão", "Tension"],
  ["Call them out", "Thách đấu", "Retarlo", "Desafiar", "Le défier"],
  ["Profile", "Hồ sơ", "Perfil", "Perfil", "Profil"],
  ["Head Coach", "HLV trưởng", "Entrenador jefe", "Treinador principal", "Entraîneur principal"],
  ["Striking Coach", "HLV đòn đánh", "Entrenador de golpeo", "Treinador de trocação", "Coach de frappe"],
  ["Wrestling Coach", "HLV vật", "Entrenador de lucha", "Treinador de wrestling", "Coach de lutte"],
  ["BJJ Coach", "HLV nhu thuật", "Entrenador de BJJ", "Treinador de jiu-jitsu", "Coach de JJB"],
  ["Strength & Conditioning", "Thể lực & sức mạnh", "Fuerza y acondicionamiento", "Preparação física", "Préparation physique"],
  ["Physio", "Vật lý trị liệu", "Fisioterapeuta", "Fisioterapeuta", "Kiné"],
  ["Manager", "Quản lý", "Mánager", "Empresário", "Manager"],
  ["Vacant", "Trống", "Vacante", "Vago", "Vacant"],
  ["Sponsors", "Nhà tài trợ", "Patrocinadores", "Patrocinadores", "Sponsors"],
  ["Promotions", "Giải đấu", "Promotoras", "Organizações", "Organisations"],
  ["Now fighting in", "Đang thi đấu tại", "Peleando ahora en", "Lutando agora no", "Combat actuellement à"],
  ["Career", "Sự nghiệp", "Carrera", "Carreira", "Carrière"],
  ["Promotion", "Giải đấu", "Promotora", "Organização", "Organisation"],
  ["Ranking", "Thứ hạng", "Ranking", "Ranking", "Classement"],
  ["Career earnings", "Tổng thu nhập", "Ganancias", "Ganhos na carreira", "Gains en carrière"],
  ["Title defenses", "Bảo vệ đai", "Defensas del título", "Defesas de título", "Défenses de titre"],
  ["Peak overall", "Chỉ số cao nhất", "Mejor media", "Melhor geral", "Meilleure note"],
  ["Move up", "Nâng cấp", "Mejorar", "Melhorar", "Améliorer"],
  ["Change division", "Đổi hạng cân", "Cambiar de división", "Mudar de divisão", "Changer de catégorie"],
  ["Retire", "Giải nghệ", "Retirarse", "Aposentar", "Prendre sa retraite"],
  ["Tap any fighter to meet them", "Chạm vào võ sĩ để gặp họ", "Toca a un peleador para conocerlo", "Toque num lutador para conhecê-lo", "Touche un combattant pour le rencontrer"],
  ["Fight record", "Thành tích", "Récord", "Cartel", "Palmarès"],
  ["No pro fights yet.", "Chưa có trận chuyên nghiệp.", "Aún sin peleas profesionales.", "Nenhuma luta profissional ainda.", "Pas encore de combat pro."],
  ["News", "Tin tức", "Noticias", "Notícias", "Actualités"],
  ["Next", "Tiếp", "Siguiente", "Próximo", "Suivant"],
  ["Previous", "Trước", "Anterior", "Anterior", "Précédent"],
  ["Show me", "Cho tôi xem", "Muéstrame", "Mostrar", "Montre-moi"],
  ["Skip tutorial", "Bỏ qua hướng dẫn", "Saltar tutorial", "Pular tutorial", "Passer le tutoriel"],
  ["Let's go!", "Bắt đầu thôi!", "¡Vamos!", "Vamos!", "C'est parti !"],
  ["PLAYING", "ĐANG CHƠI", "JUGANDO", "JOGANDO", "EN COURS"],
  ["Export", "Xuất", "Exportar", "Exportar", "Exporter"],
  ["Delete", "Xóa", "Borrar", "Excluir", "Supprimer"],
  ["+ New fighter", "+ Võ sĩ mới", "+ Nuevo peleador", "+ Novo lutador", "+ Nouveau combattant"],
  ["YOUR DIVISION", "HẠNG CỦA BẠN", "TU DIVISIÓN", "SUA DIVISÃO", "TA CATÉGORIE"],
  ["Staff market", "Thị trường nhân sự", "Mercado de personal", "Mercado de equipe", "Marché du staff"],
  ["Press conference", "Họp báo", "Conferencia de prensa", "Coletiva de imprensa", "Conférence de presse"],
  ["Respectful", "Tôn trọng", "Respetuoso", "Respeitoso", "Respectueux"],
  ["Trash talk", "Khiêu khích", "Provocar", "Provocar", "Provoquer"],
  ["Get personal", "Đánh vào chuyện riêng", "Ponerse personal", "Partir para o pessoal", "Attaque personnelle"],
  ["Big hype, big risk", "Hype lớn, rủi ro lớn", "Mucho bombo, mucho riesgo", "Muito hype, muito risco", "Gros buzz, gros risque"],
  ["Relationship", "Quan hệ", "Relación", "Relação", "Relation"],
  ["Interact", "Tương tác", "Interactuar", "Interagir", "Interagir"],
  ["Show respect", "Thể hiện sự tôn trọng", "Mostrar respeto", "Mostrar respeito", "Montrer du respect"],
  ["Trash talk online", "Khiêu khích trên mạng", "Provocar en redes", "Provocar na internet", "Provoquer en ligne"],
  ["Hang out", "Đi chơi", "Salir juntos", "Sair junto", "Sortir ensemble"],
  ["Train together", "Tập cùng nhau", "Entrenar juntos", "Treinar juntos", "S'entraîner ensemble"],
  ["Declare a rivalry", "Tuyên chiến", "Declarar una rivalidad", "Declarar rivalidade", "Déclarer une rivalité"],
  ["Bad blood sells fights", "Thù hằn bán được vé", "La mala sangre vende peleas", "Rivalidade vende lutas", "La rancune fait vendre"],
  ["Stats", "Chỉ số", "Estadísticas", "Atributos", "Stats"],
  ["You · Them", "Bạn · Họ", "Tú · Ellos", "Você · Eles", "Toi · Eux"],
  ["Fight camp", "Trại huấn luyện", "Campamento", "Camp de treinamento", "Camp d'entraînement"],
  ["Talk to the press", "Nói với báo chí", "Hablar con la prensa", "Falar com a imprensa", "Parler à la presse"],
  ["Tale of the tape", "So sánh chỉ số", "Cara a cara", "Comparativo", "Face à face"],
  ["Walk out to the cage", "Bước ra lồng đấu", "Caminar a la jaula", "Entrar no octógono", "Entrer dans la cage"],
  ["Fight night", "Đêm thi đấu", "Noche de pelea", "Noite da luta", "Soir de combat"],
  ["HEALTH", "MÁU", "SALUD", "VIDA", "SANTÉ"],
  ["STAMINA", "THỂ LỰC", "RESISTENCIA", "FÔLEGO", "ENDURANCE"],
  ["ROUND", "HIỆP", "ASALTO", "ROUND", "ROUND"],
  ["Choose your game plan for round {x}", "Chọn chiến thuật cho hiệp {x}", "Elige tu plan para el asalto {x}", "Escolha seu plano para o round {x}", "Choisis ton plan pour le round {x}"],
  ["Before the bell:", "Trước tiếng chuông:", "Antes de la campana:", "Antes do gongo:", "Avant la cloche :"],
  ["Touch gloves", "Chạm găng", "Chocar guantes", "Tocar as luvas", "Toucher les gants"],
  ["Refuse", "Từ chối", "Rechazar", "Recusar", "Refuser"],
  ["Strike", "Đứng đánh", "Golpear", "Trocar", "Frapper"],
  ["Wrestle", "Vật", "Luchar", "Derrubar", "Lutter"],
  ["Hunt Subs", "Săn khóa siết", "Buscar sumisión", "Caçar finalização", "Chercher la soumission"],
  ["Counter", "Phản đòn", "Contragolpear", "Contra-atacar", "Contrer"],
  ["All Out", "Dốc toàn lực", "A muerte", "Com tudo", "À fond"],
  ["Mix strikes and takedowns", "Kết hợp đánh và quật ngã", "Mezcla golpes y derribos", "Misture golpes e quedas", "Mélange frappes et amenées"],
  ["Keep it standing, throw volume", "Đánh đứng, ra đòn liên tục", "De pie, mucho volumen", "Em pé, muito volume", "Debout, du volume"],
  ["Takedowns and top control", "Quật ngã và khống chế", "Derribos y control arriba", "Quedas e controle por cima", "Amenées et contrôle"],
  ["Drag it down, chase the tap", "Kéo xuống, ép đầu hàng", "Llévalo al suelo, busca el tap", "Leve ao chão, busque o tap", "Au sol, cherche l'abandon"],
  ["Patient, saves energy", "Kiên nhẫn, tiết kiệm sức", "Paciente, ahorra energía", "Paciente, poupa energia", "Patient, économise l'énergie"],
  ["Swing big, burns the tank", "Vung mạnh, tốn sức", "Golpes grandes, gasta el tanque", "Golpes fortes, gasta o fôlego", "Gros coups, vide le réservoir"],
  ["Log", "Nhật ký", "Registro", "Registro", "Journal"],
  ["Skip talk", "Bỏ qua lời bình", "Saltar diálogo", "Pular fala", "Passer"],
  ["Language", "Ngôn ngữ", "Idioma", "Idioma", "Langue"],
  ["Sound", "Âm thanh", "Sonido", "Som", "Son"],
  ["Master volume", "Âm lượng tổng", "Volumen general", "Volume geral", "Volume général"],
  ["Music", "Nhạc", "Música", "Música", "Musique"],
  ["Sound effects", "Hiệu ứng âm thanh", "Efectos de sonido", "Efeitos sonoros", "Effets sonores"],
  ["Crowd", "Khán giả", "Público", "Torcida", "Public"],
  ["Commentary voice", "Giọng bình luận", "Voz de los comentaristas", "Voz dos comentaristas", "Voix des commentateurs"],
  ["Graphics", "Đồ họa", "Gráficos", "Gráficos", "Graphismes"],
  ["Graphics quality", "Chất lượng đồ họa", "Calidad gráfica", "Qualidade gráfica", "Qualité graphique"],
  ["Low", "Thấp", "Baja", "Baixa", "Basse"],
  ["Medium", "Trung bình", "Media", "Média", "Moyenne"],
  ["High", "Cao", "Alta", "Alta", "Haute"],
  ["Frame rate", "Tốc độ khung hình", "Fotogramas por segundo", "Taxa de quadros", "Images par seconde"],
  ["Show FPS counter", "Hiện bộ đếm FPS", "Mostrar contador de FPS", "Mostrar contador de FPS", "Afficher le compteur FPS"],
  ["On", "Bật", "Activado", "Ligado", "Activé"],
  ["Off", "Tắt", "Desactivado", "Desligado", "Désactivé"],
  ["Done", "Xong", "Listo", "Pronto", "Terminé"],
  ["Training", "Tập luyện", "Entrenamiento", "Treino", "Entraînement"],
  ["Fame {x}", "Danh tiếng {x}", "Fama {x}", "Fama {x}", "Célébrité {x}"],
  ["Wins {x}", "Thắng {x}", "Victorias {x}", "Vitórias {x}", "Victoires {x}"],
  ["Hire staff ({x} available)", "Thuê nhân sự ({x} người)", "Contratar personal ({x} disponibles)", "Contratar equipe ({x} disponíveis)", "Recruter ({x} disponibles)"],
  ["to win · in {x} weeks", "nếu thắng · sau {x} tuần", "por ganar · en {x} semanas", "pela vitória · em {x} semanas", "en cas de victoire · dans {x} semaines"],
  ["to win · in {x} week", "nếu thắng · sau {x} tuần", "por ganar · en {x} semana", "pela vitória · em {x} semana", "en cas de victoire · dans {x} semaine"],
  ["{x} rounds", "{x} hiệp", "{x} asaltos", "{x} rounds", "{x} rounds"],
  ["Team · {x}", "Đội ngũ · {x}", "Equipo · {x}", "Equipe · {x}", "Équipe · {x}"],
  ["Sign · {x}", "Ký · {x}", "Firmar · {x}", "Contratar · {x}", "Signer · {x}"],
  ["needs {x} fame", "cần {x} danh tiếng", "requiere {x} de fama", "precisa de {x} de fama", "requiert {x} de célébrité"],
  ["{x} rankings", "Bảng xếp hạng {x}", "Ranking de {x}", "Ranking do {x}", "Classement {x}"],
  ["All promotions & divisions", "Mọi giải đấu & hạng cân", "Todas las promotoras y divisiones", "Todas as organizações e divisões", "Toutes les organisations et catégories"],
  ["All {x} divisions", "Tất cả hạng cân {x}", "Todas las divisiones de {x}", "Todas as divisões do {x}", "Toutes les catégories {x}"],

  // App shell (web/index.html): the loading screen, the top bar, the yes/no dialog, the world help
  // line and the arena toolbar. Hand-written so the shell reads correctly even offline.
  ["Loading your fighters…", "Đang tải võ sĩ của bạn…", "Cargando tus peleadores…", "Carregando seus lutadores…", "Chargement de tes combattants…"],
  ["Start at 21 on the regional circuit with nothing but a garage gym and a dream. Win, earn a Contender Series shot, sign with the GFC and chase the belt.", "Bắt đầu ở tuổi 21 trên đấu trường khu vực với chỉ một phòng tập ga-ra và một giấc mơ. Thắng, giành suất Contender Series, ký với GFC và theo đuổi chiếc đai.", "Empieza a los 21 en el circuito regional con solo un gimnasio de garaje y un sueño. Gana, consigue una plaza en el Contender Series, ficha por la GFC y persigue el cinturón.", "Comece aos 21 no circuito regional com apenas uma academia de garagem e um sonho. Vença, conquiste uma vaga no Contender Series, assine com a GFC e persiga o cinturão.", "Commence à 21 ans sur le circuit régional avec pour seul bagage un garage et un rêve. Gagne, décroche une place au Contender Series, signe à la GFC et vise la ceinture."],
  ["e.g. Alex Rivera", "ví dụ: Alex Rivera", "p. ej.: Alex Rivera", "ex.: Alex Rivera", "ex. : Alex Rivera"],
  ["e.g. The Storm", "ví dụ: The Storm", "p. ej.: The Storm", "ex.: The Storm", "ex. : The Storm"],
  ["3D preview unavailable on this device", "Thiết bị này không xem trước được 3D", "Vista previa 3D no disponible en este dispositivo", "Prévia 3D indisponível neste dispositivo", "Aperçu 3D indisponible sur cet appareil"],
  ["Tap the ground or use WASD to walk · Shift to run · drag to look around", "Chạm vào mặt đất hoặc dùng WASD để đi · Shift để chạy · kéo để nhìn quanh", "Toca el suelo o usa WASD para caminar · Shift para correr · arrastra para mirar alrededor", "Toque no chão ou use WASD para andar · Shift para correr · arraste para olhar em volta", "Touche le sol ou utilise WASD pour marcher · Maj pour courir · fais glisser pour regarder autour"],
  ["Yes", "Có", "Sí", "Sim", "Oui"],
  ["Cancel", "Hủy", "Cancelar", "Cancelar", "Annuler"],
  ["Close", "Đóng", "Cerrar", "Fechar", "Fermer"],
  ["Phone", "Điện thoại", "Teléfono", "Celular", "Téléphone"],
  ["Toggle sound", "Bật/tắt âm thanh", "Activar o desactivar el sonido", "Ligar/desligar o som", "Activer ou couper le son"],
  ["How fights work", "Trận đấu diễn ra thế nào", "Cómo funcionan las peleas", "Como funcionam as lutas", "Comment se déroulent les combats"],
  ["Skip the announcements", "Bỏ qua phần giới thiệu", "Saltar los anuncios", "Pular os anúncios", "Passer les annonces"],
  ["Playback speed", "Tốc độ phát", "Velocidad de reproducción", "Velocidade de reprodução", "Vitesse de lecture"],
  ["Instant replay (pauses fight)", "Phát lại tức thì (tạm dừng trận)", "Repetición instantánea (pausa la pelea)", "Replay instantâneo (pausa a luta)", "Ralenti instantané (met le combat en pause)"],
  ["Show the full play-by-play", "Xem toàn bộ diễn biến", "Mostrar el relato completo", "Mostrar o relato completo", "Afficher tout le déroulé"],
  ["Replay", "Phát lại", "Repetición", "Replay", "Ralenti"],

  // Trophies
  ["Trophies", "Cúp", "Trofeos", "Troféus", "Trophées"],
  ["Earned", "Đã đạt", "Conseguido", "Conquistado", "Obtenu"],
  ["Locked", "Chưa mở", "Bloqueado", "Bloqueado", "Verrouillé"],
];

// ~130 world languages: [code, name in that language]
export const LANGUAGES = [
  ["en", "English"], ["vi", "Tiếng Việt"], ["es", "Español"], ["pt", "Português"], ["fr", "Français"],
  ["af", "Afrikaans"], ["sq", "Shqip"], ["am", "አማርኛ"], ["ar", "العربية"], ["hy", "Հայերեն"], ["as", "অসমীয়া"], ["ay", "Aymar aru"],
  ["az", "Azərbaycan"], ["bm", "Bamanankan"], ["eu", "Euskara"], ["be", "Беларуская"], ["bn", "বাংলা"], ["bho", "भोजपुरी"],
  ["bs", "Bosanski"], ["bg", "Български"], ["ca", "Català"], ["ceb", "Cebuano"], ["ny", "Chichewa"], ["zh-CN", "简体中文"],
  ["zh-TW", "繁體中文"], ["co", "Corsu"], ["hr", "Hrvatski"], ["cs", "Čeština"], ["da", "Dansk"], ["dv", "ދިވެހި"], ["doi", "डोगरी"],
  ["nl", "Nederlands"], ["eo", "Esperanto"], ["et", "Eesti"], ["ee", "Eʋegbe"], ["fil", "Filipino"], ["fi", "Suomi"], ["fy", "Frysk"],
  ["gl", "Galego"], ["ka", "ქართული"], ["de", "Deutsch"], ["el", "Ελληνικά"], ["gn", "Avañe'ẽ"], ["gu", "ગુજરાતી"], ["ht", "Kreyòl ayisyen"],
  ["ha", "Hausa"], ["haw", "ʻŌlelo Hawaiʻi"], ["he", "עברית"], ["hi", "हिन्दी"], ["hmn", "Hmoob"], ["hu", "Magyar"], ["is", "Íslenska"],
  ["ig", "Igbo"], ["ilo", "Ilokano"], ["id", "Bahasa Indonesia"], ["ga", "Gaeilge"], ["it", "Italiano"], ["ja", "日本語"], ["jv", "Basa Jawa"],
  ["kn", "ಕನ್ನಡ"], ["kk", "Қазақ"], ["km", "ខ្មែរ"], ["rw", "Kinyarwanda"], ["gom", "कोंकणी"], ["ko", "한국어"], ["kri", "Krio"],
  ["ku", "Kurdî"], ["ckb", "کوردی"], ["ky", "Кыргызча"], ["lo", "ລາວ"], ["la", "Latina"], ["lv", "Latviešu"], ["ln", "Lingála"],
  ["lt", "Lietuvių"], ["lg", "Luganda"], ["lb", "Lëtzebuergesch"], ["mk", "Македонски"], ["mai", "मैथिली"], ["mg", "Malagasy"],
  ["ms", "Bahasa Melayu"], ["ml", "മലയാളം"], ["mt", "Malti"], ["mi", "Māori"], ["mr", "मराठी"], ["mni-Mtei", "ꯃꯤꯇꯩꯂꯣꯟ"], ["lus", "Mizo"],
  ["mn", "Монгол"], ["my", "မြန်မာ"], ["ne", "नेपाली"], ["no", "Norsk"], ["or", "ଓଡ଼ିଆ"], ["om", "Afaan Oromoo"], ["ps", "پښتو"],
  ["fa", "فارسی"], ["pl", "Polski"], ["pa", "ਪੰਜਾਬੀ"], ["qu", "Runa Simi"], ["ro", "Română"], ["ru", "Русский"], ["sm", "Gagana Samoa"],
  ["sa", "संस्कृतम्"], ["gd", "Gàidhlig"], ["nso", "Sepedi"], ["sr", "Српски"], ["st", "Sesotho"], ["sn", "chiShona"], ["sd", "سنڌي"],
  ["si", "සිංහල"], ["sk", "Slovenčina"], ["sl", "Slovenščina"], ["so", "Soomaali"], ["su", "Basa Sunda"], ["sw", "Kiswahili"],
  ["sv", "Svenska"], ["tg", "Тоҷикӣ"], ["ta", "தமிழ்"], ["tt", "Татар"], ["te", "తెలుగు"], ["th", "ไทย"], ["ti", "ትግርኛ"], ["ts", "Xitsonga"],
  ["tr", "Türkçe"], ["tk", "Türkmen"], ["ak", "Twi"], ["uk", "Українська"], ["ur", "اردو"], ["ug", "ئۇيغۇرچە"], ["uz", "Oʻzbek"],
  ["cy", "Cymraeg"], ["xh", "isiXhosa"], ["yi", "ייִדיש"], ["yo", "Yorùbá"], ["zu", "isiZulu"],
];
const RTL = new Set(["ar", "he", "fa", "ur", "ps", "sd", "ug", "yi", "dv", "ckb"]);

let lang = "en";
try { lang = localStorage.getItem(STORE_KEY) || "en"; } catch { /* storage blocked */ }
if (!LANGUAGES.some((l) => l[0] === lang)) lang = "en";

let exact = new Map(), patterns = [];
function buildDict() {
  exact = new Map();
  patterns = [];
  const col = BUILT_IN.indexOf(lang) + 1;
  if (!col) return;
  for (const row of ROWS) {
    const [en, tr] = [row[0], row[col]];
    if (en.includes("{x}")) {
      const re = new RegExp("^" + en.replace(/[.*+?^$()|[\]\\]/g, "\\$&").replace("{x}", "(.+?)") + "$");
      patterns.push([re, tr]);
    } else exact.set(en, tr);
  }
}

// machine translation: cache per language, a queue of lines waiting to be translated
let cache = {};
let pending = new Set();
let engine = null; // { translate(lines) => Promise<string[]> }
let flushTimer = null;
let onStatus = null;

function loadCache() {
  cache = {};
  try { cache = JSON.parse(localStorage.getItem(CACHE_KEY + lang) || "{}"); } catch { /* none yet */ }
}
let saveTimer = null;
function saveCache() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      const keys = Object.keys(cache);
      // keep the cache to a sensible size
      if (keys.length > 4000) for (const k of keys.slice(0, keys.length - 4000)) delete cache[k];
      localStorage.setItem(CACHE_KEY + lang, JSON.stringify(cache));
    } catch { /* full or blocked: it still works for this session */ }
  }, 1500);
}

/** The browser's on-device translator (Chrome) if it has this language, else Google Translate online. */
async function makeEngine(code) {
  try {
    const T = self.Translator;
    if (T && (await T.availability({ sourceLanguage: "en", targetLanguage: code })) !== "unavailable") {
      const tr = await T.create({ sourceLanguage: "en", targetLanguage: code });
      return { name: "device", translate: (lines) => Promise.all(lines.map((l) => tr.translate(l))) };
    }
  } catch { /* fall through to the online translator */ }
  return {
    name: "online",
    async translate(lines) {
      const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" + encodeURIComponent(code) + "&dt=t&q=" + encodeURIComponent(lines.join("\n"));
      const r = await fetch(url);
      if (!r.ok) throw new Error("translator " + r.status);
      const data = await r.json();
      const text = data[0].map((p) => p[0]).join("");
      const out = text.split("\n");
      if (out.length !== lines.length) throw new Error("line mismatch");
      return out;
    },
  };
}

function queue(line) {
  if (!engine || pending.has(line) || line.length > 600) return;
  pending.add(line);
  if (!flushTimer) flushTimer = setTimeout(flush, 120);
}

let failures = 0;
async function flush() {
  flushTimer = null;
  const all = [...pending];
  if (!all.length || !engine) return;
  // batches of up to ~1500 characters
  const batches = [];
  let cur = [], size = 0;
  for (const l of all) {
    if (size + l.length > 1500 && cur.length) { batches.push(cur); cur = []; size = 0; }
    cur.push(l);
    size += l.length + 1;
  }
  if (cur.length) batches.push(cur);
  const forLang = lang;
  for (const b of batches) {
    try {
      const out = await engine.translate(b);
      if (forLang !== lang) return;
      b.forEach((l, i) => { cache[l] = out[i] || l; pending.delete(l); });
      failures = 0;
    } catch (e) {
      b.forEach((l) => pending.delete(l));
      if (++failures >= 3 && onStatus) onStatus("offline");
      if (failures >= 3) engine = null;
      console.warn("Translation failed", e);
    }
  }
  saveCache();
  schedule();
}

// ------------------------------------------------------------------ translating the page

const SKIP = new Set(["SCRIPT", "STYLE", "TEXTAREA", "CODE"]);
const LEAD = /^[^\p{L}\p{N}+(]+/u, TRAIL = /[\s:…!?.]+$/u;

/** Translates one line of English (null = no translation yet). */
function tr(src) {
  const s = src.replace(/\s+/g, " ").trim();
  if (!s || !/\p{L}{2}/u.test(s)) return null;
  const lead = (s.match(LEAD) || [""])[0];
  const body = s.slice(lead.length);
  const trail = (body.match(TRAIL) || [""])[0];
  const core = body.slice(0, body.length - trail.length);
  let hit = exact.get(s) ?? exact.get(body) ?? exact.get(core);
  if (hit !== undefined) return exact.has(s) ? hit : exact.has(body) ? lead + hit : lead + hit + trail;
  for (const [re, t] of patterns) {
    const m = core.match(re);
    if (m) return lead + t.replace("{x}", m[1]) + trail;
  }
  if (cache[s] !== undefined) return cache[s];
  queue(s);
  return null;
}

function translateNode(n) {
  if (n.__out !== n.nodeValue) n.__src = n.nodeValue; // the game changed it: new English source
  const src = n.__src;
  let out = src;
  if (lang !== "en") {
    const t = tr(src);
    if (t !== null) out = src.match(/^\s*/)[0] + t + src.match(/\s*$/)[0];
  }
  n.__out = out;
  if (n.nodeValue !== out) n.nodeValue = out;
}

function translateAttrs(el) {
  for (const a of ["placeholder", "title", "aria-label"]) {
    if (!el.hasAttribute(a)) continue;
    const key = "__src_" + a, outKey = "__out_" + a;
    const v = el.getAttribute(a);
    if (el[outKey] !== v) el[key] = v;
    const t = lang === "en" ? null : tr(el[key]);
    const out = t ?? el[key];
    el[outKey] = out;
    if (v !== out) el.setAttribute(a, out);
  }
}

let busy = false;
function walk(root = document.body) {
  if (!root) return;
  busy = true;
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => (n.nodeType === 1 && (SKIP.has(n.tagName) || n.getAttribute("translate") === "no") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
  });
  let n;
  while ((n = w.nextNode())) {
    if (n.nodeType === 3) translateNode(n);
    else translateAttrs(n);
  }
  busy = false;
}

let raf = 0;
function schedule() {
  if (raf) return;
  raf = requestAnimationFrame(() => {
    raf = 0;
    walk();
  });
}

let observer = null;
/** Starts translating the page; onStatusChange("offline") if machine translation can't be reached. */
export function startI18n(onStatusChange) {
  onStatus = onStatusChange;
  observer = new MutationObserver(() => { if (!busy) schedule(); });
  observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["placeholder", "title", "aria-label"] });
  applyLang();
}

async function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = RTL.has(lang) ? "rtl" : "ltr";
  buildDict();
  loadCache();
  pending = new Set();
  engine = null;
  failures = 0;
  schedule();
  if (lang === "en") return;
  const forLang = lang;
  const e = await makeEngine(lang);
  if (forLang !== lang) return;
  engine = e;
  if (onStatus) onStatus(e.name);
  schedule();
}

export function getLang() {
  return lang;
}

export function isBuiltIn(code) {
  return code === "en" || BUILT_IN.includes(code);
}

export function setLang(code) {
  if (!LANGUAGES.some((l) => l[0] === code)) return;
  lang = code;
  try { localStorage.setItem(STORE_KEY, code); } catch { /* ignore */ }
  applyLang();
}

/** Translates a string for code that builds text itself (toasts, speech). Falls back to English. */
export function t(s) {
  if (lang === "en") return s;
  return tr(s) ?? s;
}
